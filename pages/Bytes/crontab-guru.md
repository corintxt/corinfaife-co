---
title: Check cron syntax with crontab guru
date: 2024-12-16
tag: cron, scheduling, syntax
author: Corin
---

I don't use cron jobs regularly enough to know the syntax by heart.

As a (primarily) Python programmer I'm used to thinking of time in terms of datetime objects and conversions. But instead of being geared towards calendar months and clock time, cron is made for scheduling tasks at regular intervals.

Cron job format consists of a string of five characters in a line separated by spaces, like so: `* * * * *`, with the values corresponding to minute, hour, day of the month, month, and day of the week.

| minute | hour | day (month) | month | day (week)
|-|-|-|-|-
| * | * | * | * | *

The * character means "each one of these units" so the above example means "do this every minute of every day."

I recently found the site [crontab guru](https://crontab.guru/), an editor/validator for cron schedule expressions, which makes it easier to confirm that a cron job is doing what you think it does. Type in an expression in cron format, and it will describe the output of that expression in human language with a sample of the times that the job will run:

![crontab guru example](/images/2024/cron.png)

You don't really *need* to use a tool like this, but for any projects that require task scheduling, I'd rather double check than risk making an error that could cause a key process to misfire.