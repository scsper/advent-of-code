const readFile = require('../../utils/read-file')
const {calculateFrequency, findFirstRepeatedResultingFreqeuncy} = require('./solution')

// Taken from https://adventofcode.com/2018/day/1
// The input is not checked in to Github to encourage others to go to the site.
const input = readFile(__dirname + '/day-1.input.txt')

console.log(calculateFrequency(input))
console.log(findFirstRepeatedResultingFreqeuncy(input))
