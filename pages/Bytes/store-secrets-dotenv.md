---
title: Store secrets in .env files for Python scripts
date: 2025-10-16
tag: python, git
author: Corin
---

# Store secrets in .env files for Python code

I often have to remind myself of the various ways to keep API keys, tokens etc. from being accidentally committed to my GitHub repos.

One of these ways is through using `.env` files in Python. Then, instead of hardcoding the values into a script, you store them in a separate `.env` file and load them at runtime using the `python-dotenv` package.

To do this, first install the package with pip, then create a file in the project directory named `.env`.

Inside the file goes something like:

```
API_KEY=my_secret_api_key
```

In your Python script, you can then call a `load_dotenv()` function to load everything from here into the local Python environment. 

This is accessed with `os.getenv("VARIABLE_NAME")`. E.g.:

```
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("SAM_API_KEY")
```

To avoid committing it to GitHub, don't forget to add the `.env`file into `.gitignore`!