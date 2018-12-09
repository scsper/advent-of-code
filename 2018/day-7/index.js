const readFile = require('../../utils/read-file')
const {getInstructionList} = require('./solution')

// Taken from https://adventofcode.com/2018/day/7
// The input is not checked in to Github to encourage others to go to the site.
const input = readFile(__dirname + '/day-7.input.txt')

console.log(getInstructionList(input))
