function getResultingPolymer (input, letterToRemove = '') {
  const resultingPolymer = input[0].split('')
  let index = 0

  while (true) {
    if (index === resultingPolymer.length) {
      break
    }

    const char = resultingPolymer[index]
    const nextChar = resultingPolymer[Math.min(index + 1, resultingPolymer.length - 1)]

    const isSameCase = (char.charCodeAt(0) < 96 && nextChar.charCodeAt(0) < 96) ||
      (char.charCodeAt(0) > 96 && nextChar.charCodeAt(0) > 96)

    if (char === letterToRemove || char === letterToRemove.toLowerCase()) {
      resultingPolymer.splice(index, 1)
      index = Math.max(index - 1, 0)
      continue
    }

    if (!isSameCase && char.toLowerCase() === nextChar.toLowerCase()) {
      resultingPolymer.splice(index, 2)
      index = Math.max(index - 1, 0)
    } else {
      index++
    }
  }

  return resultingPolymer.length
}

function findProblemUnit (input) {
  let length = Infinity

  for (let charCode = 65; charCode < 91; charCode++) {
    const char = String.fromCharCode(charCode)

    const polymerLength = getResultingPolymer(input, char)

    length = Math.min(length, polymerLength)
  }

  return length
}

module.exports = {
  getResultingPolymer,
  findProblemUnit
}