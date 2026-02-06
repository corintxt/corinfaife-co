---
title: Push local git commits to pre-existing remote
date: 2026-01-28
tag: git, license, version control
author: Corin
---

# Push local git commits to pre-existing remote repo

I had to look this up recently when pushing a local git repo to a remote repo on GitHub that I'd already set up with a `LICENSE.md` file that wasn't stored locally.

Because the remote repo wasn't empty, I needed to rebase and allow unrelated histories to merge.

So, in the project directory, we first stage and commit local files:
```bash
git add .
git commit -m "My local commit"
```
Add the GitHub repository as a remote (replacing correct `REMOTE_URL` value):
```bash
git remote add origin <remote-url.git>
```
Verify the remote was added correctly:
```bash
git remote -v
```
Now: pull changes from the remote repository with `--rebase` and `--allow-unrelated-histories` flags:

```bash
git pull --rebase origin main --allow-unrelated-histories
```


Because the remote repository has existing files, local and remote histories are unrelated. So this command pulls the remote's changes and allows a merge with your local project, rebasing the repo to create a linear history. It's effectively as if the remote files always existed, and local changes were made on top of them.

Finally, push the rebased local repo upstream to origin:

```bash
git push -u origin main
```
All local files and the remote repository files should now be merged and synchronized. 