---
title: Switch from conda to mamba
date: 2025-3-17
tag: python, conda, mamba, package management
author: Corin
---

# Switching from conda to mamba

Up until recently the AFP datavisualisation department has been using [Anaconda](https://www.anaconda.com/) to manage Python packages and environments. But we recently found out – via an unexpected email from their sales team! - that since AFP is an organization of more than 200 employees, we have to purchase a Business license to use it. 

We didn't previously realize this because of the confusing relationship between `conda`, which is an open-source package manager, and `Anaconda`, which is non-free software comprising conda *plus* additional package management services and a graphical interface. 

Additionally, though `conda` is free to use, large companies are required to pay to install packages via the `default` channel (which is security audited by Anaconda), but *not* to install packages through conda that come from other sources like `conda-forge`.

To make a long story short we want to get back into the unambiguously open-source ecosystem, so we're switching to [Mamba](https://mamba.readthedocs.io/en/latest/), a reimplementation of conda written in C++ that pulls from `conda-forge` packages.

Luckily, once installed mamba works as a drop-in replacement for conda, meaning that it uses the same commands and syntax. 

So to make the switch, first we install `mamba` in the base conda environment (downloading from `conda-forge` of course!)

```
conda install -n base -c conda-forge mamba
```

Then we can use commands such as:

```
# To install a package
mamba install package

# To create a new environment
mamba create -n new_env python

# To activate an environment (including existing conda envs)
mamba activate env_name
```

I had no problem installing mamba, but ran into an error message:

![mamba error](/images/2025/mambaerror.png)

As suggested in the error message, I first needed to initialize with:

```
eval "$(mamba shell hook --shell zsh)"
```

After that, the error disappeared, and I could activate and run all of my existing conda environments with mamba. Very convenient!