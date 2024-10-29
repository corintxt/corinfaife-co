---
title: IF AND statement in Sheets
date: 2024-10-29
tag: Google sheets
author: Corin
---

# IF...AND statements in Google Sheets


I do most of my data analysis in Python where I'm used to writing staments like:

```python
if price < 20 and meal=='lunch':
    print("Let's eat here!")
else:
    print("Let's go somewhere else")
```

I also use Google Sheets frequently at work as it's much simpler to use for sharing small datasets with colleagues. 

I wanted to use the equivalent of `if..and` syntax, and learned that it requires two nested functions: the `IF()` function (which checks whether a condition is true) and the `AND()` function (which returns `TRUE` if all the conditions inside it are true).

So the same code as above would be:

```
=IF(AND(A2<20, B2="lunch"), "Let's eat here!", "Let's go somewhere else")
```

In Sheets an `IF` function requires three arguments: the first is the condition to test, the second is the value to return if the condition is `TRUE`, and the third is the value to return if the condition is `FALSE`.

By using the `AND` function as the first argument, we make the `IF` function contingent on two variables not one.