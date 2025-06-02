---
title: Git merge to previous commit
date: 2025-06-02
tag: git
author: Corin
---

# Merge a git branch up to previous commit

Generally the way that I merge git branches is to work on a feature branch until the feature is complete, then merge the entire branch back into the main branch. 

Today I learned that it's not necessary to merge up to the HEAD of the current branch, and in fact one can merge only up to a given commit. To do this, all you need to know is the ID of the commit. Then reference this in the merge:

```git
git checkout <branch-name>
git merge <commit-id>
```
Because commit IDs are unique, the name of the branch it's part of isn't needed.
