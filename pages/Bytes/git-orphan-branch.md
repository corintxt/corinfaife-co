---
title: Make a git branch with no shared history
date: 2026/3/10
tag: git
author: Corin
---

# Make a git branch with no shared history

Sometimes I want to have a branch in an existing git repository that has no connection to the project's commit history, but is useful to keep in the same repo.

For example, I might do this when spinning up a prototype frontend to explore some data I'm collecting, which might be written in a different language and ultimately deployed to a different location.

Using the `--orphan` flag with `git checkout` does exactly this:

```bash
git checkout --orphan frontent
```

After running this, you're on a new branch `frontend` with no commits and no parent. All the files from your previous branch are staged but not yet committed.

If you want to clear them out for a totally fresh start:

```bash
git rm -rf .
```

From here you can add files and make a first commit as normal. That commit will be the root of a completely independent history — the branch shares the same repo but has no common ancestor with any other branch.