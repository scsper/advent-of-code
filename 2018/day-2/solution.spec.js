const { getChecksum, findMatchingBoxes } = require('./solution')

describe('./2018/day-2', () => {
  it('gets a checksum', () => {
    const boxIds = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']

    expect(getChecksum(boxIds)).toEqual(12)
  })

  it('finds matching boxes', () => {
    const boxIds = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz']

    expect(findMatchingBoxes(boxIds)).toEqual('fgij')
  })
})