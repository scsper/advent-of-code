const fs = require('fs')

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8').split(/\r\n|\n/)
}

module.exports = readFile
