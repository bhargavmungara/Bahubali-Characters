import uniqueRandomArray from 'unique-random-array'
const bahubaliNames = require('./bahubali-names.json')

const mainExport = {
  all: bahubaliNames,
  random: uniqueRandomArray(bahubaliNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
