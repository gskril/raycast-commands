#!/bin/bash

# Dependency: This script requires `jq` cli installed: https://stedolan.github.io/jq/
# Install via homebrew: `brew install jq`

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title ETH Gas
# @raycast.mode compact

# Optional parameters:
# @raycast.icon ⛽️
# @raycast.packageName Etherscan

# Documentation:
# @raycast.description Check the live Ethereum gas price from Etherscan
# @raycast.author Greg Skriloff
# @raycast.authorURL https://twitter.com/gregskril

function gas() {
  curl -s "https://ethgasalerts.xyz/api/gas" | jq -r '.average'
}

# Check if jq is installed
if ! [ -x "$(command -v jq)" ]; then
  # Check if homebrew is installed
  if ! [ -x "$(command -v brew)" ]; then
    echo "You'll need homebrew to install the dependencies."
    exit 1
  fi

  brew install jq
  # echo -n "brew install jq" | pbcopy
  # echo "Homebrew package required (copied to clipboard)"
  # exit 1
fi

# If gas() doesn't return a number, return an error
if [[ "$(gas)" =~ ^[0-9]+$ ]]; then
  echo "$(gas) gwei"
else
  echo "Error"
fi
