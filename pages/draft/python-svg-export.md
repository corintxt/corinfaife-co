---
title: Comparing Python dataviz libraries for SVG export
date: 2024/11/1
description: In search of that cool, clean feeling
tag: afp, dataviz, python, svg
author: Corin
---

![Dataviz example](/images/2024/seaborn_kde.png)

## Subhed here.

As a data journalist at the news agency AFP, my workflow often involves using Python to conduct data analysis and visualization, then handing over the results to a graphic designer as an SVG file. 

This is because, although you can certainly make fine looking visualizations just using code, we'll often need to make some final tweaks in order to meet to the rigorous standard required to publish something that can be re-used across print, web, video, and other media.

In the past year I've used various different libraries to achieve this, but I wanted to take the time to properly evaluate the pros and cons of each and make a final decision about what to use.

There are essentially three criteria that I want to assess:

1) The library should create **polished data visualizations out-of-the-box**, i.e. with a minimum of additional styling needed to look good.
2) The library should have built-in components for most common chart types (and perhaps some less common ones)
3) The library should be able to export these charts to SVG format **as cleanly as possible**, meaning faithful colour transfer, few extraneous layers, etc.

Where (1), (2) and (3) are in conflict, it's a question of finding a library that optimizes between them. Additionally, thought I'm mostly interested in static graphics, there are bonus points for being able to handle interactivity with a minimum of fuss.

The candidate libraries I wanted to test are:
* [Plotly](https://plotly.com/python/)
* [Seaborn](https://seaborn.pydata.org/)
* [Altair](https://altair-viz.github.io/)
* [Bokeh](https://bokeh.org/)

Here are some notes on the results.

---
## Graph type
I wanted to make decisions based on a chart that combined multiple categories, and marked data with color, points, lines, and shaded areas.

 a base chart


## Seaborn
* Built on top of Matplotlib

Had to look up how to [save text as text not curve](https://stackoverflow.com/questions/34387893/output-matplotlib-figure-to-svg-with-text-as-text-not-curves)

## Altair

