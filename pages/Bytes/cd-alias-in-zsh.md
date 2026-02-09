---
title: Use an alias to change directory quickly
date: 2026/2/9
tag: command line, zsh, bash
author: Corin
---

# Use an alias to change directory quickly

It only occurred to me today that you can use a bash alias to change directory quickly by including the `cd` command and then the path.

I'm using `zsh` on Mac so first I opened my RC file in nano:

```bash
nano ~/.zshrc
```

And then added this line to be able to move into my local code directory with a one word command:

`alias gocode='cd ~/Path/To/My/Code/'`