#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Date to Unix
// @raycast.mode silent

// Optional parameters:
// @raycast.icon ⏰
// @raycast.argument1 { "type": "text", "placeholder": "tm at 1pm" }
// @raycast.packageName Date Converter

// Documentation:
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

import * as chrono from 'chrono-node'
import clipboard from 'clipboardy'

let input = process.argv.slice(2)[0]

// Add keywords to chrono parser
if (input.includes('tm')) {
  input = input.replace('tm', 'tomorrow')
}

const date = chrono.parseDate(input)

if (date) {
  const unix = date.getTime() / 1000
  const unixString = unix.toString().split('.')[0]

  clipboard.writeSync(unixString)

  console.log('Copied to clipboard')
} else {
  console.log('Invalid date')
}
