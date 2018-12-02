/**
 * Sums all frequencies given in an array.
 *
 * @param {Array} frequencies in the form of ['+1', '-1', '0']
 */
function calculateFrequency (frequencies) {
  let resultingFrequency = 0

  frequencies.forEach(frequency => {
    resultingFrequency += parseInt(frequency, 10)
  })

  return resultingFrequency
}

/**
 * Finds the first repeated sum of frequencies in the given array.
 * This function will continually loop over the input until a result is found.
 *
 * @param {Array} frequencies in the form of ['+1', '-1', '0']
 */
function findFirstRepeatedResultingFreqeuncy (frequencies) {
  const resultingFrequencies = new Set()
  let resultingFrequency = 0

  // We are guaranteed to find a result from the puzzle's definition
  // so we loop until we find an answer.
  while (true) {
    for (let i = 0; i < frequencies.length; i++) {
      const frequency = frequencies[i]

      if (resultingFrequencies.has(resultingFrequency)) {
        return resultingFrequency
      }

      resultingFrequencies.add(resultingFrequency)
      resultingFrequency += parseInt(frequency, 10)
    }
  }
}

module.exports = {
  calculateFrequency,
  findFirstRepeatedResultingFreqeuncy
}