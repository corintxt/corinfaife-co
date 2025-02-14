---
title: Change Zsh terminal colors
date: 2025-2-14
tag: command line, zsh
author: Corin
---

# Change Zsh terminal colors

![Zsh colors](/images/2025/zshcolors.png)

I have often seen programme friends with kaleidoscopic terminal colors, but never knew how to achieve it. 

I had tried downloading themes for the Terminal app or iTerm2, but the text always stayed monochrome.

Today I learned that the colors of the terminal emulator are a separate layer on top of the undelying shell, so the shell colors and variables need to be changed first.

I'm using Zsh, so looked up some information on how to [customize Zsh prompt](https://www.reddit.com/r/zsh/comments/qm22qh/custom_prompt_tips/). Then I found a [code example](https://dev.to/cassidoo/customizing-my-zsh-prompt-3417) for a style that I liked, and also used a [Zsh prompt generator](https://zsh-prompt-generator.site/) to tweak a few of the variables slightly.

I added the following lines to my `~/.zshrc` file:
```
autoload -Uz vcs_info
precmd() { vcs_info }

zstyle ':vcs_info:git:*' formats '%b '

setopt PROMPT_SUBST
PROMPT='%F{yellow}%n%f %F{blue}%~%f %F{red}${vcs_info_msg_0_}%f$ '
RPROMPT="%F{green}%*%f"
```
And ended up with the terminal display in the picture above.