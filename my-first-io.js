'use strict'

const fs = require('fs');

const data = fs.readFileSync(process.argv[2]);

const str = data.toString();

const arr = str.split('\n');

const lines = arr.length - 1;

console.log(lines);