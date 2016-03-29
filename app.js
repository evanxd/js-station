'use strict';

var request = require('request');
var config = require('./config');
var serialDevice = require('./lib/'+config.serialDeviceType);
var POST_API = 'http://localhost:3000/sensors/' + config.sensorKey + '/data';

serialDevice.on('data', function(data) {
  request.post(POST_API, {
    form: { pm25Index: data.pm2dot5 }
  });
  console.log('Sent PM2.5 index data to SensorWeb: ' + data.pm2dot5);
  console.log('PM1.0 index data: ' + data.pm1dot0);
  console.log('PM10 index data: ' + data.pm10);
});
