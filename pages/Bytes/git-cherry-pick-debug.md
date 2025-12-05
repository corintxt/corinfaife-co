---
title: Use git cherry-pick to find breaking changes
date: 2025-12-5
tag: git
author: Corin
---

# Use git cherry-pick to isolate breaking changes

To update my local branch of an application under development, I merged a colleague's feature branch that was a number of commits ahead. But after merging, my local version of the application broke.

I couldn't find exactly where the breaking change occurred, so I needed to apply the commits one at a time and test the application after each. 

To do this I used `git cherry-pick`, which lets a user [apply commits individually](https://git-scm.com/docs/git-cherry-pick) instead of merging a whole sequence of commits at once.

First, I reset my branch to the state before the merge:

```bash
git reset --hard HEAD~1
```

Then I listed commits from my colleague's branch to get their IDs:

```bash
git log colleague-branch --oneline
```

Now I could apply commits individually using cherry-pick:

```bash
git cherry-pick <commit-id>
```

After each cherry-pick I ran application to test. At the point that it stopped working, I'd found the commit that contained the problematic change.