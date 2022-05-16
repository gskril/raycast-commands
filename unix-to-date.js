#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Unix to Date
// @raycast.mode silent

// Optional parameters:
// @raycast.icon ⏰
// @raycast.argument1 { "type": "text", "placeholder": "1652806800" }
// @raycast.packageName Date Converter

// Documentation:
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

const unix = parseInt(process.argv.slice(2)[0])

// unix to date
const now = new Date()
const date = new Date(unix * 1000)
const diff = date.getTime() - now.getTime()

// diff to days hours, minutes
const days = Math.floor(diff / (1000 * 60 * 60 * 24))
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

if (days < 0 || hours < 0 || minutes < 0) {
	// currently doesn't support dates in the past
	console.log('The date is in the past')
} else {
	console.log(
		`${days < 1 ? '' : `${days} ${days === 1 ? 'day, ' : 'days, '}`}` +
			`${
				hours < 1
					? ''
					: `${hours} ${hours === 1 ? 'hour, ' : 'hours, '}`
			}` +
			`${minutes < 1 ? '' : `${minutes} minutes`}` +
			' from now'
	)
}
