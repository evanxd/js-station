'use strict';

var EventEmitter2 = require('eventemitter2').EventEmitter2;
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var serialPort = new SerialPort('/dev/ttyS0', {
  baudrate: 9600,
  parser: serialport.parsers.readline('\x42\x4d')
});
var linkit = new EventEmitter2();

serialPort.on('open', function () {
  var pm25 = 0;
  serialPort.on('data', function(data) {
    if (data.length === 30 || data.length === 22) {
      pm25 = parseData(data, 10);
      console.log('PM2.5: ' + pm25);
      linkit.emit('data', { pm25: pm25 });
    }
  });
});

function parseData(data, index) {
  return data.charCodeAt(index) * 0x100 + data.charCodeAt(index + 1);
}

module.exports = linkit;
