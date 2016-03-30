'use strict';

var EventEmitter2 = require('eventemitter2').EventEmitter2;
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var arduino = new EventEmitter2();

serialport.list(function (err, ports) {
  var port = ports.find(function(port) {
    return port.manufacturer.match('Arduino') ||
           port.manufacturer.match('Particle');
  });

  if (!port) {
    console.error('No Arduino board is connected.');
    return;
  }

  var sp = new SerialPort(port.comName, {
    baudrate: 9600,
    parser: serialport.parsers.readline('\n')
  });
  sp.open(function (err) {
    if (err) {
      console.error('Failed to open: ' + err);
    } else {
      var pmData;
      sp.on('data', function(data) {
        if (data && data.match('{')) {
          pmData = JSON.parse(data);
          arduino.emit('data', pmData);
        }
      });
    }
  });
});

module.exports = arduino;
