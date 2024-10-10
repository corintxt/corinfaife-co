---
title: Importing large CSV to SQLite
date: 2024-10-10
tag: intro
author: Corin
---

# Importing a CSV file into SQLite

FEMA maintains a [public database of National Flood Insurance Program policies](https://www.fema.gov/openfema-data-page/fima-nfip-redacted-policies-v2) which can be downloaded as one huge CSV file. The uncompressed file is 26.5GB, which is far too large to be opened by Excel, and tricky even with Python since pandas usually wants to load a full dataframe into memory.

It requires a database engine so I'm going to work with the data using SQLite. I had to look up how to import a CSV file into SQLite, and here's the sequence of commands:

```sql
$ sqlite3 fema.db
.mode csv
.import FimaNfipPolicies.csv policies
```
This creates a SQLite3 database called `fema.db` and imports the flood insurance policies CSV file into a table named `policies`.

The data is then ready to query using SQLite in the command line, or a tool like [DB Browser](https://sqlitebrowser.org/).