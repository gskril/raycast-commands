#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title ENS Resolver
// @raycast.mode silent

// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "name.eth" }
// @raycast.packageName ENS

// Documentation:
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

import { createPublicClient, http, isAddress } from 'viem'
import { mainnet } from 'viem/chains'
import clipboardy from 'clipboardy'

const input = process.argv.slice(2)[0]

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

if (isAddress(input)) {
  const name = await client.getEnsName({ address: input })

  if (name) {
    clipboardy.writeSync(name)
    console.log('Copied name to clipboard')
  } else {
    console.log('Copied abbreviated address to clipboard')
  }
} else {
  const address = await client.getEnsAddress({ name: input })

  if (address) {
    clipboardy.writeSync(address)
    console.log('Copied address to clipboard')
  } else {
    console.log('Invalid address')
  }
}
