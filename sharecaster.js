#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Create Sharecaster URL
// @raycast.mode silent

// Optional parameters:
// @raycast.icon 🟪
// @raycast.argument1 { "type": "text", "placeholder": "farcaster://casts/0x..." }
// @raycast.packageName Farcaster

// Documentation:
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

import axios from 'axios'
import clipboard from 'clipboardy'

const deeplink = process.argv.slice(2)[0]

try {
  const { data: sharecaster } = await axios.post(
    'https://sharecaster.xyz/api/share',
    {
      sharecast: deeplink,
    }
  )

  const url = `https://sharecaster.xyz/${sharecaster.data}`
  clipboard.writeSync(url)

  console.log('Copied Sharecaster URL to clipboard')
} catch {
  console.log('Error creating Sharecaster URL')
}
