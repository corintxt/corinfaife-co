---
title: Switch off scientific notation in pandas
date: 2024-10-15
tag: Python, pandas
author: Corin
---

# Switch off scientific notation in pandas

By default pandas uses scientific notation to display large numbers of data type [*float*](https://realpython.com/python-data-types/#floating-point-numbers), ie. numbers with a decimal point (known as a floating point). 

Most people find conventional notation easier to scan, so will want to switch to conventional notation.

An example from [this answer on StackOverflow](https://stackoverflow.com/questions/21137150/format-suppress-scientific-notation-from-pandas-aggregation-results) shows that you can do this with the following code:

` pd.options.display.float_format = '{:.2f}'.format`