---
title: Restore BigQuery table from snapshot
date: 2026/3/25
tag: bigquery, GCS, database
author: Corin
---

# Restore a deleted BigQuery table from snapshot

I accidentally deleted a BigQuery database in a project I was working on and panicked because there wasn't an obvious "undo" option.

Luckily as I learned from [this StackOverflow post](https://stackoverflow.com/questions/27537720/how-can-i-undelete-a-bigquery-table), it's totally possible to restore a deleted table. 

The way to do it is by copying a snapshot of the table from before it was deleted, and referencing the snapshot time with a unix timestamp.

Supposing we removed a table accidentally at the time I'm writing this - March 25, 2026 at 10.15am ET.

```bash
bq rm dataset_name.important_table
```

We first need to get the unix timestamp for a time when the table still existed. We'll [look up](https://www.unixtimestamp.com/) the timestamp for 10.00am, which is `1774447200`.

We need to multiply this by 1000 since BigQuery uses timestamps in milliseconds, not seconds. 

Then run a copy command for the table at the given time:

```bash
bq cp dataset_name.important_table@774447200000 dataset_name.my_restored_table                         
```
This will create a copy of the table as it was, under the new table name specified after the command.