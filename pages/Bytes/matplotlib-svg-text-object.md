---
title: Export matplotlib chart as SVG with text objects
date: 2025-10-6
tag: Python, matplotlib
author: Corin
---

# Export matplotlib chart as SVG with text as text objects

By default, exporting a chart to SVG from the Python matplotlib library will render text labels as vector paths.

To convert text into text objects (much easier for working with in for e.g. Adobe Illustrator), change matplotlib's RCParams to set svg.fonttype to 'none'. This tells matplotlib to render text as actual text elements instead of embedding them into the SVG as paths.

```python
import matplotlib as mpl
import matplotlib.pyplot as plt

mpl.rcParams['svg.fonttype'] = 'none'

# ....make a chart of some kind here

plt.savefig('my_chart.svg')
```