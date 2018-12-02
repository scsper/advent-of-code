const readFile = require('../read-file')

describe('./utils/read-file', () => {
  it('reads a file and splits it by line', () => {
    const data = readFile(__dirname + '/read-file-input.txt')

    expect(data).toEqual(['+1', '-1', '+3'])
  })
})
