#!/usr/bin/env bash

if [ -z "$1" ]
then
  echo "must specify 'stage' or 'prod'"
  exit 1;
fi

branch="$1";
remoteRepo="$1";
remoteBranch="main"
timestamp=$(date +%s)

npm run build;
git add -f dist;
git commit -m "deploy-to-$branch-$timestamp";
git subtree split --prefix dist -b $branch;

git push -f $remoteRepo $branch:$remoteBranch;
git branch -D $branch;

remoteUrl=$(git remote get-url $1);
echo "deployed to $remoteUrl";
