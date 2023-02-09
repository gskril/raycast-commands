#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Cast
// @raycast.mode silent

// Optional parameters:
// @raycast.icon 🟪
// @raycast.argument1 { "type": "text", "placeholder": "Start typing a cast" }
// @raycast.packageName Farcaster

// Documentation:
// @raycast.description Post to Farcaster
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

import 'dotenv/config'
import clipboard from 'clipboardy'
import { MerkleAPIClient } from '@standard-crypto/farcaster-js'

const text = process.argv.slice(2)[0]
const MERKLE_API_KEY = process.env.MERKLE_API_KEY

if (!MERKLE_API_KEY) {
  throw new Error('MERKLE_API_KEY is not set')
}

const client = new MerkleAPIClient({ secret: MERKLE_API_KEY })

await client
  .publishCast(text)
  .then((res) => {
    const deeplink = `farcaster://casts/${res.hash}/${res.hash}`
    clipboard.writeSync(deeplink)
    console.log('Cast sent!')
  })
  .catch((err) => {
    console.log('Error sending cast', err.response)
  })
