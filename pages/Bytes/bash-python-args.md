---
title: Bash script to execute Python with args
date: 2024-10-14
tag: Python, bash
author: Corin
---

# Bash script to execute Python script with args

I wrote a small Python script to fetch a list of upcoming events from a calendar API, and wanted to make a **bash script** so I could assign it to an alias, then use a single shell command to change into the script directory and execute it.

The Python script takes a single argument, so I had to look up how to handle an argument when executing the bash script and pass it on.

The answer was to use `$1`, which represents the first command-line argument passed to a bash script. I also used `$#`, a special variable which holds the *number* of arguments passed to a script, in an if statement to check that we did not forget to provide the argument.

```bash
#!/bin/bash

# Check if an argument is provided
if [ $# -eq 0 ]; then
    echo "Error: No argument provided"
    exit 1
fi

# Assign argument to variable
arg="$1"

# Change to relevant directory
cd ~/Path/To/My/Script

# Run script with variable as arg
python3 script.py -a "$arg"
```