#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Generate web3-starter
# @raycast.mode fullOutput

# Optional parameters:
# @raycast.icon ⚒️
# @raycast.argument1 { "type": "text", "placeholder": "Repo name" }
# @raycast.packageName Developer Utils

# Documentation:
# @raycast.description Generate new repo from web3-starter template
# @raycast.author Greg Skriloff
# @raycast.authorURL https://gregskril.com

echo "Creating repo from web3-starter template..."
cd /Users/Greg/Desktop/crypto/ || exit
gh repo create "$1" --template gskril/web3-starter --private
sleep 3
echo "https://github.com/gskril/$1" | pbcopy
gh repo clone gskril/"$1"
cd "$1" || exit
echo "Launching VS Code..."
code .
