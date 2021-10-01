import uniqueRandomArray from 'unique-random-array'
const bahubaliNames = require('./bahubali-names.json')

const mainExport = {
  all: bahubaliNames,
  random: uniqueRandomArray(bahubaliNames),
}

export default mainExport  //export default can only be used once 
module.exports = mainExport // For CommonJS Compatibility
