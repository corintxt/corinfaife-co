---
title: Replace git branch with merge -s ours
date: 2025-3-11
tag: git
author: Corin
---

# Replace git branch with merge -s ours

In a project I'm currently working on, I had created a development branch, then done extensive work (effectively rewriting the codebase entirely) without merging back to into main.

Ultimately I needed to merge the branches in such a way that I would overwrite the main branch with the development branch, with no attempt to resolve differences between them. (This is more a replacement than a merge, I suppose.)

I found the method for this [on StackOverflow](https://stackoverflow.com/questions/2862590/how-to-replace-master-branch-in-git-entirely-from-another-branch), and more explanation on this [similar answer](https://stackoverflow.com/questions/2763006/make-the-current-git-branch-a-master-branch?noredirect=1&lq=1):

```
git checkout main       # switch to outdated main branch first
git pull                # check local branch up to date
git checkout dev        # this is the branch whose commits you want to keep
git merge -s ours main  # keep the content of dev branch, but record a merge
git checkout main       # get read to **lose** all changes on this branch
git merge dev           # fast-forward main up to the merge
```

The key part is `-s ours` which is short for `--strategy=ours`

From the [docs](https://git-scm.com/docs/git-merge) about the 'ours' strategy:

> This resolves any number of heads, but the resulting tree of the merge is always that of the current branch head, effectively ignoring all changes from all other branches. It is meant to be used to supersede old development history of side branches.