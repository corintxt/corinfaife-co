---
title: Fix YearLocator bug with native matplotlib.plt
date: 2025-1-16
tag: matplotlib, python, pandas
author: Corin
---

Recently I've been [working on some matplotlib stylesheets](/posts/matplotlib-styling) to bring charts made in Python into line with my employer's graphics conventions. 

Making news graphics, it's pretty common for the X axis to represent time, as we're often comparing a variable such as price inflation, global temperature, migrant border crossings, etc. from month to month and year to year.

For different charts we might want to space the X ticks differently – one for every year, or two years, or five years, and so on, depending on the overall timescale of the data. According to the matplotlib docs we do it like this:

```python
import matplotlib.dates as mdates

ax = plt.gca()

ax.xaxis.set_major_locator(mdates.YearLocator())
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y'))
```

But I couldn't get it to work: in fact, using this code would completely break the X axis scale.

After testing out lots of solutions I [read that](https://stackoverflow.com/questions/69101233/using-dateformatter-resets-starting-date-to-1970) the problem could be caused by calling pandas' `plot()` function instead of matplotlib's. And yes indeed, switching the plot function did fix the problem, without changing any other code!

So in effect rather than drawing a bar chart like this:

```python
    df.plot(x='year', y='value', kind='bar')
```
We need to draw it like this:
```
fig, ax = plt.subplots()

ax.bar(df.year, df.width)
```
And we can then call the `set_major_locator()` or `set_minor_locator()` functions as expected.

A simple fix, but only when you know where to look for it.