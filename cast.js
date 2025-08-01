#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Cast
// @raycast.mode silent

// Optional parameters:
// @raycast.icon 🟪
// @raycast.argument1 { "type": "text", "placeholder": "Text to cast" }
// @raycast.packageName Farcaster

// Documentation:
// @raycast.description Publish a cast on Farcaster
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

import {
  makeCastAdd,
  NobleEd25519Signer,
  FarcasterNetwork,
  getInsecureHubRpcClient,
  CastType,
} from '@farcaster/hub-nodejs'
import { hexToBytes } from 'viem'
import 'dotenv/config'

const ACCOUNT_PRIVATE_KEY = process.env.FARCASTER_SIGNER_PKEY
const FID = Number(process.env.FARCASTER_FID)
const input = process.argv.slice(2)[0]

const privateKeyBytes = hexToBytes(ACCOUNT_PRIVATE_KEY)
const ed25519Signer = new NobleEd25519Signer(privateKeyBytes)

const dataOptions = {
  fid: FID,
  network: FarcasterNetwork.MAINNET,
}

const client = getInsecureHubRpcClient(process.env.FARCASTER_HUB_URL)

const url = input.match(/https?:\/\/[^\s]+/)?.[0]
const text = input.replace(url, '').trim()

let embeds = []

if (url) {
  embeds = [{ url }]
}

const cast = await makeCastAdd(
  {
    type: CastType.CAST,
    text,
    embeds,
    embedsDeprecated: [],
    mentions: [],
    mentionsPositions: [],
  },
  dataOptions,
  ed25519Signer
)

if (cast.isErr()) {
  throw new Error(cast.error.message)
}

const messageSubmitResult = await client.submitMessage(cast.value)

if (messageSubmitResult.isErr()) {
  throw new Error(messageSubmitResult.error.message)
}

console.log('Cast sent')
client.close()
