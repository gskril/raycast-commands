#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Graduation Countdown
// @raycast.mode silent

// Optional parameters:
// @raycast.icon 🎓
// @raycast.packageName Graduation Countdown

// Documentation:
// @raycast.author Greg Skriloff
// @raycast.authorURL https://gregskril.com

// countdown to june 9th, 2022 at 7pm EST
const now = new Date();
const graduation = new Date(2022, 5, 3, 19, 0, 0, 0);
const diff = graduation - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);

const daysLabel = days === 1 ? 'day,' : 'days,';
const hoursLabel = hours === 1 ? 'hour,' : 'hours,';
const minutesLabel = minutes === 1 ? 'minute,' : 'minutes,';
const secondsLabel = seconds === 1 ? 'second' : 'seconds';

const formattedCountdown = `${days} ${daysLabel} ${hours} ${hoursLabel} ${minutes} ${minutesLabel} ${seconds} ${secondsLabel}`;

console.log(formattedCountdown);