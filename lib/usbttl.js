var EventEmitter2 = require('eventemitter2').EventEmitter2;
var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var usbttl = new EventEmitter2();

serialport.list(function (err, ports) {
  var port = ports.find(function(port) {
    return port.manufacturer.match('Prolific');
  });

  if (!port) {
    console.error('No USB TTL cable detected.');
    return;
  }

  function parseField(data, pos) {
    return data.charCodeAt(pos) * 0x100 + data.charCodeAt(pos+1);
  }

  var sp = new SerialPort(port.comName, {
    baudrate: 9600,
    parser: serialport.parsers.readline('\x42\x4d')
  });
  sp.open(function (err) {
    if (err) {
      console.error('Failed to open: ' + err);
    } else {
      var pmData = {};
      sp.on('data', function(data) {
        if (30 === data.length || 22 === data.length) {
          pmData.pm10 = parseField(data, 8);
          pmData.pm25 = parseField(data, 10);
          pmData.pm100 = parseField(data, 12);
          usbttl.emit('data', pmData);
        }
      });
    }
  });
});

module.exports = usbttl;
