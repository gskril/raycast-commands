#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title ENS Developer Tools
// @raycast.mode fullOutput

import { labelhash, namehash } from 'viem'
import packet from 'dns-packet'

// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "name.eth" }
// @raycast.packageName ENS

// Documentation:
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

const input = process.argv.slice(2)[0]

const label = input.split('.')[0]
const nameHash = namehash(input)
const labelHash = labelhash(label)

const data = {
  label,
  dnsEncoded: '0x' + packet.name.encode(input).toString('hex'),
  nameHash,
  nameHashUint: BigInt(nameHash).toString(),
  labelHash: labelHash,
  labelHashUint: BigInt(labelHash).toString(),
}

console.log(data)
