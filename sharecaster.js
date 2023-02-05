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

import clipboard from 'clipboardy'

const deeplink = process.argv.slice(2)[0]

const { data } = await fetch('https://sharecaster.xyz/api/share', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    sharecast: deeplink,
  }),
})
  .then((res) => {
    if (!res.ok) throw new Error('Error creating sharecaster URL')
    return res.json()
  })
  .catch(() => {
    throw new Error('Error creating sharecaster URL')
  })

const sharecaster = `https://sharecaster.xyz/${data}`
clipboard.writeSync(sharecaster)

console.log('Copied Sharecaster URL to clipboard')
