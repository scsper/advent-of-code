const {calculateFrequency, findFirstRepeatedResultingFreqeuncy} = require('./solution')

describe('./2018/day-1/solution', () => {
  it('calculates frequency correctly', () => {
    const frequencies = ['+1', '-2']

    expect(calculateFrequency(frequencies)).toEqual(-1)
  })

  it('finds the first repeating frequency', () => {
    expect(findFirstRepeatedResultingFreqeuncy(['+1', '-1'])).toEqual(0)
    expect(findFirstRepeatedResultingFreqeuncy(['+3', '+3', '+4', '-2', '-4'])).toEqual(10)
    expect(findFirstRepeatedResultingFreqeuncy(['-6', '+3', '+8', '+5', '-6'])).toEqual(5)
    expect(findFirstRepeatedResultingFreqeuncy(['+7', '+7', '-2', '-7', '-4'])).toEqual(14)
  })
})