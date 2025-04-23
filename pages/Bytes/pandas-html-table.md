---
title: Load HTML table into pandas dataframe
date: 2025-4-23
tag: Python, pandas, HTML
author: Corin
---

# Load HTML table into pandas dataframe

A small trick I just learned is that if page that has an HTML table in it, you can load it into a pandas dataframe directly without making a separate request to the page:

```
import pandas as pd

# Get the table 
url = 'webpage-with-table.com'
tables = pd.read_html(url)

# Load table to dataframe
df = tables[0]
```

The `pd.read_html()` function returns a *list* of dataframes, so if there's just one table on the page we need to access it by index `[0]`. If there are multiple tables on the HTML page, all of them would be stored in the `tables` list and could be accessed by index position.