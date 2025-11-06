---
title: Flatten a JSON file in pandas with normalize()
date: 2025-11-06
tag: python, pandas, json
author: Corin
---

# Flatten nested JSON data with pd.json_normalize()

When working with JSON data that has nested structures, converting it directly to a pandas DataFrame can result in columns containing dictionaries or lists. The `pd.json_normalize()` function flattens these nested structures into separate columns.

Here's a simple example:

```python
import pandas as pd

# Sample nested JSON data
data = [
    {
        "name": "Alice",
        "address": {"city": "New York", "zip": "10001"},
        "age": 30
    },
    {
        "name": "Bob",
        "address": {"city": "San Francisco", "zip": "94102"},
        "age": 25
    }
]

# Flatten the nested structure
df = pd.json_normalize(data)
```

This creates a DataFrame with columns like `name`, `age`, `address.city`, and `address.zip`, where nested fields are separated by dots by default.

For deeper nesting, you can specify the `record_path` parameter to indicate which nested list to flatten, and `meta` to preserve parent fields. This is especially useful when working with API responses or complex JSON files.