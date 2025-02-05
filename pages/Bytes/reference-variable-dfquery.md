---
title: Use @ to reference variable in df.query()
date: 2025-2-5
tag: python, pandas
author: Corin
---

# Use @ character to reference variable inside DataFrame.query

To evaluate conditions in a pandas dataframes I now use the `df.query('column == "some_value"')` syntax, rather than `df[df['column']=="some_value"]`, which I find less readable.

With the [DataFrame.query method](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.query.html) the query takes the form of a string, so variables can't be accessed in the usual way. 

Instead, to reference variables we need to use the "@" character in front of them, like so:

```python
    countries = ['India', 'Malaysia', 'Thailand']
    df.query('Year >= 2001 & `Country Name` in @countries')
```

(Also, backticks are used for column names that contain spaces, like `Country Name`)