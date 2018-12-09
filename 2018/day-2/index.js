const readFile = require('../../utils/read-file')
const {getChecksum, findMatchingBoxes} = require('./solution')

// Taken from https://adventofcode.com/2018/day/2
// The input is not checked in to Github to encourage others to go to the site.
const input = readFile(__dirname + '/day-2.input.txt')

console.log(getChecksum(input))
console.log(findMatchingBoxes(input))
