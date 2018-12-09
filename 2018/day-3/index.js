const readFile = require('../../utils/read-file')
const {calculateOverlap, getNonOverlappingClaim} = require('./solution')

// Taken from https://adventofcode.com/2018/day/2
// The input is not checked in to Github to encourage others to go to the site.
const input = readFile(__dirname + '/day-3.input.txt')

// const input = ['#123 @ 3,2: 5x4']

console.log(getNonOverlappingClaim(input))