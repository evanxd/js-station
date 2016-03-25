'use strict';

var request = require('request');
var config = require('./config');
var arduino = require('./lib/arduino');
var POST_API = 'http://localhost:3000/sensors/' + config.sensorKey + '/data';

arduino.on('data', function(data) {
  request.post(POST_API, {
    form: { pm25Index: data.pm2dot5 }
  });
  console.log('Sent PM2.5 index data to SensorWeb: ' + data.pm2dot5 );
});
