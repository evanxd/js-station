'use strict';

var EventEmitter2 = require('eventemitter2').EventEmitter2;
var config = require('../config');
var simulator = new EventEmitter2();

if (!config.simulator) {
  config.simulator = {
    samplingRate: 5000,
    dataRange: {
      pm10: { min: 10, max: 20 },
      pm25: { min: 10, max: 20 },
      pm100: { min: 10, max: 20 }
    }
  };
}
var options = config.simulator;

setInterval(function() {
  simulator.emit('data', {
    pm10: getRandomInt(options.dataRange.pm10.min, options.dataRange.pm10.max),
    pm25: getRandomInt(options.dataRange.pm25.min, options.dataRange.pm25.max),
    pm100: getRandomInt(
      options.dataRange.pm100.min,
      options.dataRange.pm100.max
    )
  });
}, options.samplingRate);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = simulator;
