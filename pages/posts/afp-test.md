---
title: AFP data test
date: 2023/7/17
description: Charts and analysis for data journalist edit test.
tag: data
author: You
---

# AFP edit test


## Deadly tragedies involving migrants crossing Mexico to the US

This analysis is based on [data](https://missingmigrants.iom.int/downloads) from the UN's International Organization for Migration (IOM). The dataset gives data for all regions of the world from 2014-present, but we are working with a [filtered dataset](https://github.com/corintxt/Data-test-AFP/blob/main/data/US-Mexico-missing-migrants.csv) containing data on migrants who died or went missing trying to cross the US-Mexico border.

Data for this analysis was [processed using Python/Jupyter Notebooks](https://github.com/corintxt/Data-test-AFP/blob/main/Analysis1.ipynb), and visualized using Datawrapper.
    
    Click on each image below to view an interactive version.


### Migration is becoming more deadly over time

* In 2022, 6 times as many migrants died or went missing crossing the US-Mexico border than in 2014.
* As the number of migrants trying to cross the borded increased, so did the number of women and children -- with deadly results. Data from this period shows a dramatic increase in the number of women and children dying or disappearing at the border. In 2014 just 6 women and 2 children were recorded dying or disappearing. In 2022, 100 women and 29 children were lost trying to cross.

[![Migrant deaths by demographic](https://datawrapper.dwcdn.net/hO8s5/full.png)](https://www.datawrapper.de/_/hO8s5/)

### A harsh environment

* Environmental causes are by far the biggest cause of death or disappearance, where these causes have been recorded. Discounting cases with mixed or unknown cause of death, drowning is the leading cause of death/disappearance for migrants on the US-Mexico border crossing route, followed by environmental exposure (lack of shelter, food, water).
* Although migrants are sometimes subject to interpersonal violence, it accounts for a far lower share of deaths than environmental factors.
    * Note for further reporting: more exploratory analysis might identify links between cause of death and the time of year, or specific location of the border crossing. Geolocated deaths are shown [here](https://www.datawrapper.de/_/1wEwX/) although this needs more work to be a production-ready graphic.

[![Causes of death recorded](https://datawrapper.dwcdn.net/DOsSB/full.png)](https://www.datawrapper.de/_/DOsSB/)

### Further reporting needed: region of origin

* The IOM dataset provides information on the country and region of origin for migrants who have died or disappeared at the border. However, differences in how this data is recorded has created overlapping categories, e.g. "Latin America / Caribbean" category overlaps with "Caribbean" and "Central America"/"South America. This makes it difficult to draw conclusions about trends over time – for example, it appears that more migrants came from South America in 2023, but it could be that the "South America" category is being used in a different way. With more time to clean and standardize data, this could be another reporting angle.

[![Deaths by region of origin](https://datawrapper.dwcdn.net/d43EJ/full.png)](https://www.datawrapper.de/_/d43EJ/)
