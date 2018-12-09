const readFile = require('../../utils/read-file')
const {getResultingPolymer, findProblemUnit} = require('./solution')

// Taken from https://adventofcode.com/2018/day/5
// The input is not checked in to Github to encourage others to go to the site.
const input = readFile(__dirname + '/day-5.input.txt')

console.log(getResultingPolymer(input))
console.log(findProblemUnit(input))
