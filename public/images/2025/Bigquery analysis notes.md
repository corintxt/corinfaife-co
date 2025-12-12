
## Using VertexAI

#### **Connect BigQuery to Vertex AI**

The first step for using VertexAI is to enable it in the Cloud console. After that, we need to connect it to BigQuery using the BigQuery Connection API – which creates a secure bridge so our SQL queries can talk to the AI models.

The steps for this are:
    1. In BigQuery, click **+ ADD** > **Connections to external data sources**.
    2. Choose **Vertex AI remote models**.
    3. Name it (e.g., `gemini-connection`).
    4. Copy the "Service Account ID" created by this connection and grant it the `Vertex AI User` role in IAM.

We then run a command to choose the model we're using and initialize it.
#### Run command to initialize - choose model
```sql
CREATE OR REPLACE MODEL `epstein_data.gemini_model`
REMOTE WITH CONNECTION `us.gemini-ai`
OPTIONS(ENDPOINT = 'gemini-2.5-flash-lite');
```

To choose model: I [looked up the pricing](https://ai.google.dev/gemini-api/docs/pricing) in the developer docs, decided to test with Flash Lite initially.

## Select insights!
- **Tool:** `ML.GENERATE_TEXT` function.
- **Action:** You can now "select" insights from your AI model as if they were columns in your table.

```sql
SELECT
`From`,
`Subject`,
-- The AI Output
ml_generate_text_llm_result AS summary
FROM
ML.GENERATE_TEXT(
MODEL `epstein_data.gemini_model`,
(
SELECT
`From`,
`Subject`,
-- The Prompt now references the backticked field names
CONCAT(
'Role: You are a concise executive assistant.\n',
'Task: Write a summary of this email in exactly 1 sentence. Do not exceed 25 words.\n',
'--- Email Data ---\n',
'From: ', `From`, '\n',
'To: ', `To`, '\n',
'Subject: ', `Subject`, '\n',
'Body: ', `Body`
) AS prompt
FROM
`epstein_data.emails_test` -- Your original source table
LIMIT 100
),
STRUCT(
0.1 AS temperature,
50 AS max_output_tokens,
TRUE AS flatten_json_output
)
);
```

## Batch processing
We have a version of the query that works for 100 emails. But for a large cache we need to batch process so we don't hit processing limits.

First step:
## 1. ⚙️ Preparation: Staging Tables (Do This Once)

We need to add a unique ID to your source data so the batch process can track which emails have been processed and avoid re-summarizing them.

### **(OLD) 1A. Copy emails into a Staging Table with Unique IDs**

Run this query once. It copies your data into a new table (`emails_staging`) and adds a unique `email_id` to every row.

SQL

```sql
CREATE OR REPLACE TABLE `epstein_data.emails_staging_test` AS
SELECT
	GENERATE_UUID() as email_id, -- Unique ID for tracking
	*
FROM `epstein_data.emails_test`;
```

### **1B. Create a Results Table**

Run this once. This is the final table that will store the processed IDs, the raw fields, and the AI-generated summaries.

SQL

```sql
CREATE TABLE IF NOT EXISTS `epstein_data.email_summaries_test` (
	email_id STRING,
	`From` STRING,
	`Subject` STRING,
	summary STRING,
	filename STRING
);
```

That's great you have a working query! Using your specific query and table names, here is the complete plan to implement the summarization in batches of **250** using BigQuery's **Scheduled Queries**.

The process involves adding a unique ID to track progress, creating a destination table, and using an `INSERT INTO` statement within a scheduled loop.

---
## 2. 📝 The Batch Processing Query

This is the core SQL statement that does two things:

1. **Filters:** It looks at the `emails_staging` table and only selects rows whose `email_id` **do not exist** in the `email_summaries` table.
    
2. **Limits:** It takes the first 250 of those unprocessed rows.
    
3. **Inserts:** It runs your `ML.GENERATE_TEXT` logic and saves the results into the `email_summaries` table.
    

```sql
-- see query in BigQuery console, title:
-- Email summary batch run -test
```

---

## Summarizing the summaries

(Note: we tried this but it didn't work properly, we can do better next time.)

You need a new table to store the scores, so you don't lose your existing summaries.

```sql
CREATE TABLE IF NOT EXISTS `epstein_data.email_news_analysis_test` (
  email_id STRING,
  `From` STRING,
  `Subject` STRING,
  `Filename` STRING,
  summary STRING,
  newsworthiness_score INT64, -- NEW: The 1-10 score
  justification STRING,      -- NEW: The AI's reasoning
);
```



------

## One shot, two process: Summarize and assess newsworthiness.

**Run once to create SQL table**
```sql
CREATE OR REPLACE TABLE `epstein_data.email_summaries_test` (
  email_id STRING,
  filename STRING,
  `From` STRING,
  `Subject` STRING,
  summary STRING,              -- Summary text
  newsworthiness_score INT64,  -- New numeric score
  justification STRING         -- New text justification
);
```

