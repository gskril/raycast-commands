#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Generate Typescript project
# @raycast.mode compact

# Optional parameters:
# @raycast.icon ⚒️
# @raycast.argument1 { "type": "text", "placeholder": "Folder name" }
# @raycast.packageName Developer utils

# Documentation:
# @raycast.author Greg Skriloff
# @raycast.authorURL https://gregskril.com

cp -r /Users/Greg/Documents/typescript-template /Users/Greg/Desktop/"$1"
# mv /Users/Greg/Desktop/typescript-template /Users/Greg/Desktop/"$1"
cd /Users/Greg/Desktop/"$1" || exit
echo "Launching Cursor..."
cursor .
