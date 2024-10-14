---
title: Run Python script and drop into REPL
date: 2024-10-11
tag: Python
author: Corin
---

# Run a Python script and drop into REPL

Here's a simple one that I forgot how to do and had to look up:

Whereas:

`$ python script.py`

will execute a Python script from command line,

`$ python -i script.py`

will execute the same script, then drop into the interactive Python REPL.

From there you can run functions, check the value of assigned variables, etc., which is very useful for writing and/or debugging code.

More about the [Python REPL here](https://realpython.com/python-repl/). 