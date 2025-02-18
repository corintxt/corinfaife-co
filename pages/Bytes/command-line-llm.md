---
title: Use Claude from command line with llm tool
date: 2025-2-18
tag: command line, Claude, llm, API
author: Corin
---

# Use Claude API from command line with `llm` tool

I've found Anthropic's [Claude](https://claude.ai/) LLM to be very useful for writing code. The $20/month subscription is well worth it in terms of the efficiency I gain – but since I use it almost entirely for code, I'm also paying for lots of features I don't use (image upload, Google Docs integration, etc.)

Using the Claude API, which is charged by usage rather than flat rate, is cheaper for my needs. So I'm trying out Simon Willison's [LLM](https://llm.datasette.io/en/stable/) CLI tool to interact with Claude from the command line.

First I installed LLM with pip:

```
pip install llm
```
Then following instructions [here](https://github.com/simonw/llm-anthropic), I used `llm` to install the Anthropic plugin and set API keys:
```
llm install llm-anthropic
llm keys set anthropic
# Then paste key when prompted
```
Now I can run prompts from command line, by first choosing the model and then providing the prompt as a string. For example:

![LLM claude demo](/images/2025/llm-claude-demo.png)