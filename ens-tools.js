#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title ENS Developer Tools
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "name.eth" }
// @raycast.packageName ENS

// Documentation:
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

import { bytesToString, hexToBytes, isHex, toHex } from 'viem'
import { packetToBytes, namehash, labelhash } from 'viem/ens'

const input = process.argv.slice(2)[0]

const label = input.split('.')[0]
const nameHash = namehash(input)
const labelHash = labelhash(label)

if (isHex(input)) {
  console.log({
    dnsDecoded: bytesToPacket(hexToBytes(input)),
  })
} else {
  const data = {
    label,
    dnsEncoded: toHex(packetToBytes(input)),
    nameHash,
    nameHashUint: BigInt(nameHash).toString(),
    labelHash: labelHash,
    labelHashUint: BigInt(labelHash).toString(),
  }

  console.log(data)
}

function bytesToPacket(bytes) {
  let offset = 0
  let result = ''

  while (offset < bytes.length) {
    const len = bytes[offset]
    if (len === 0) {
      offset += 1
      break
    }

    result += `${bytesToString(bytes.subarray(offset + 1, offset + len + 1))}.`
    offset += len + 1
  }

  return result.replace(/\.$/, '')
}
