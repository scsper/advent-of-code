function getChecksum (boxIds) {
  let has2Total = 0
  let has3Total = 0

  boxIds.forEach(boxId => {
    const { has2, has3 } = processBoxId(boxId)

    has2Total += has2
    has3Total += has3
  })

  return has2Total * has3Total
}

function processBoxId (boxId) {
  const charMap = {}
  let has2Count = 0
  let has3Count = 0

  for (let i = 0; i < boxId.length; i++) {
    const char = boxId[i]

    if (!charMap[char]) {
      charMap[char] = 0
    }

    charMap[char]++

    // Slight optimization to remove the need to iterate over the keys of `charMap`
    // to discover which characters occurred exactly twice or thrice.
    if (charMap[char] === 2) {
      has2Count++
    } else if (charMap[char] === 3) {
      has2Count--
      has3Count++
    } else if (charMap[char] === 4) {
      has3Count--
    }
  }

  return {
    has2: has2Count > 0,
    has3: has3Count > 0
  }
}

function findMatchingBoxes (boxIds) {
  // Algorithm:
  // 1. Sort the keys
  // 2. For each string, remove 1 letter, from 0..length-1.  Put this entry in a map.
  // 3. If the key exists in the map, and it's from a different string, then return
  const boxIdMap = {}
  const boxIdKeys = []

  for (let boxIdIndex = 0; boxIdIndex < boxIds.length; boxIdIndex++) {
    const boxId = boxIds[boxIdIndex].split('')

    for (let indexToSkip = 0; indexToSkip < boxId.length; indexToSkip++) {
      const arrayForBuildingString = []

      for (let i = 0; i < boxId.length; i++) {
        if (i !== indexToSkip) {
          arrayForBuildingString.push(boxId[i])
        }
      }

      const boxIdKey = arrayForBuildingString.join('')

      if (boxIdMap[boxIdKey] && boxIdMap[boxIdKey] !== boxId) {
        return boxIdKey
      } else {
        boxIdMap[boxIdKey] = boxId
      }
    }
  }
}

module.exports = {
  getChecksum,
  findMatchingBoxes
}