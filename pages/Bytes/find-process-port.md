---
title: Find and kill a process using a given port
date: 2024/11/12
tag: networking
author: Corin
---

I was trying to use [Tabula](https://tabula.technology/) to extract data from a pdf, but the program would't run correctly because the port it expected to use was already assigned to another program.

An [answer](https://stackoverflow.com/questions/40118878/8080-port-already-taken-issue-when-trying-to-redeploy-project-from-spring-tool-s) on Stack Overflow taught me that two commands are needed to identify and kill the process on Mac:

```
sudo lsof -i tcp:8080

kill -15 PID
```
The first command gives the process ID for the program using `localhost:8080`, and the second command gives a kill signal to the process (substituting `PID` for the actual ID number given by the first command.)