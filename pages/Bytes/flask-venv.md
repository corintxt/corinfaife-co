---
title: Install Flask in virtual environment
date: 2024-12-3
tag: Python, Flask
author: Corin
---

# Install Flask in virtual environment

I'm starting to build a simple Flask application for AFP.

Since I mostly use Conda for managing Python environments, I had to double check the [Flask documentation](https://flask.palletsprojects.com/en/stable/installation/) for the exact steps:

```python
$ mkdir myproject
$ cd myproject

$ python3 -m venv envname
$ source envname/bin/activate

$ pip install flask
```
