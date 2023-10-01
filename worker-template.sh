#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Generate Cloudflare Worker
# @raycast.mode compact

# Optional parameters:
# @raycast.icon ⚒️
# @raycast.argument1 { "type": "text", "placeholder": "Folder name" }
# @raycast.packageName Developer utils

# Documentation:
# @raycast.author Greg Skriloff
# @raycast.authorURL https://gregskril.com

cp -r /Users/Greg/Documents/worker-template /Users/Greg/Desktop
mv /Users/Greg/Desktop/worker-template /Users/Greg/Desktop/"$1"
cd /Users/Greg/Desktop/"$1" || exit
echo "Launching VS Code..."
code .
