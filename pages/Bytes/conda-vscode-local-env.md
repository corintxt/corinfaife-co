---
title: Create conda env in VSCode
date: 2025-10-14
tag: python, conda, vscode
author: Corin
---

# Create and activate a conda env in VSCode

The VSCode command palette (accessed with ⌘ + ⇧ + P) gives the user an option to create a Python environment, including a conda environment, in the current directory. 

![Python command palette](/images/2025/commandpalette.png)

This environment can then be activated by referencing the path to the environment where one would usually put the environment name, e.g. `conda activate myenv`.

So the command to activate an environment by path might look like:

```bash
conda activate /Users/Corin/Code/MyDataProject/.conda
```