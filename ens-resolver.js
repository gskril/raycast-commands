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

import axios from 'axios'
import clipboard from 'clipboardy'

const arg = process.argv.slice(2)[0]

axios
  .get(`https://api.ensideas.com/ens/resolve/${arg}`)
  .then(async (res) => {
    const data = await res.data
    const ethAddressRegex = new RegExp(/^0x[a-fA-F0-9]{40}$/)

    const address = data.address
    const name = data.name
    const displayName = data.displayName

    if (ethAddressRegex.test(arg)) {
      clipboard.writeSync(displayName)
      console.log(
        name
          ? 'Copied name to clipboard'
          : 'Copied abbreviated address to clipboard'
      )
    } else if (address) {
      clipboard.writeSync(data.address)
      console.log('Copied address to clipboard')
    } else {
      console.log('Invalid address')
    }
  })
  .catch((err) => {
    console.log('Invalid address')
  })
