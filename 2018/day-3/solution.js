const Grid = {
  EMPTY: '0',
  OCCUPIED: '#',
  OVERLAP: 'x'
}

function initializeGrid (gridSize) {
  const grid = []

  for (let i = 0; i < gridSize; i++) {
    grid[i] = []

    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = Grid.EMPTY
    }
  }

  return grid
}

function parseLine (line) {
  const splitLine = line.split(' ')
  const id = parseInt(splitLine[0].split('#')[1], 10)

  let [x, y] = splitLine[2].split(',')
  x = parseInt(x, 10)
  y = parseInt(y, 10)

  let [width, height] = splitLine[3].split('x')
  width = parseInt(width, 10)
  height = parseInt(height, 10)

  return {
    id,
    coordinate: { x, y },
    dimension: { width, height }
  }
}

function getNonOverlappingClaim (lines) {
  const grid = initializeGrid(1000)
  const nonOverlappingClaims = new Set()
  let squaresThatOverlap = 0

  lines.forEach(line => {
    const { coordinate, dimension, id } = parseLine(line)
    nonOverlappingClaims.add(id)

    for (let i = 0; i < dimension.height; i++) {
      for (let j = 0; j < dimension.width; j++) {
        switch (grid[coordinate.y + i][coordinate.x + j]) {
          case Grid.EMPTY:
            grid[coordinate.y + i][coordinate.x + j] = id
            break
          case Grid.OVERLAP:
            nonOverlappingClaims.delete(id)
            break
          default:
            nonOverlappingClaims.delete(id)
            nonOverlappingClaims.delete(grid[coordinate.y + i][coordinate.x + j])
            squaresThatOverlap++
            grid[coordinate.y + i][coordinate.x + j] = Grid.OVERLAP
        }
      }
    }
  })

  return {
    nonOverlappingClaim: [...nonOverlappingClaims][0],
    squaresThatOverlap
  }
}

module.exports = {
  getNonOverlappingClaim
}