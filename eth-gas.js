#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title ETH Gas
// @raycast.mode silent

// Optional parameters:
// @raycast.icon ⛽️
// @raycast.packageName Ethereum

// Documentation:
// @raycast.description Check the live Ethereum gas price from Etherscan
// @raycast.author Greg Skriloff
// @raycast.authorURL https://twitter.com/gregskril

import axios from 'axios'

axios
	.get('https://gas.best/stats')
	.then(async (res) => {
		const data = await res.data
		const live = data.pending.fee + ' gwei'
		const est60 = data.forecast['1 hour'] + ' gwei'

		console.log(`${live}   ⏰ ${est60} in the hour`)
	})
	.catch((err) => {
		console.log(err)
	})
