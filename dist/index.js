'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bahubaliNames = require('./bahubali-names.json');

var mainExport = {
  all: bahubaliNames,
  random: (0, _uniqueRandomArray2.default)(bahubaliNames)
};

exports.default = mainExport;

module.exports = mainExport; // for CommonJS compatibility