#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title ETH Gas
// @raycast.mode silent

// Optional parameters:
// @raycast.icon ⛽️
// @raycast.packageName Ethereum

// Documentation:
// @raycast.description Check the live Ethereum gas price
// @raycast.author Greg Skriloff
// @raycast.authorURL https://twitter.com/gregskril

import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const gasPrice = await publicClient
  .getGasPrice()
  .then((res) => Number(res) / 1e9)

console.log(`${gasPrice.toFixed(2)} gwei`)
