'use strict';

var request = require('request');
var config = require('./config');
var serialDevice = require(`./lib/${config.serialDeviceType}`);
var POST_API = `http://${config.server}:${config.port}/sensors/` +
               `${config.sensorKey}/data?apiKey=${config.apiKey}`;

serialDevice.on('data', function(data) {
  request.post(POST_API, {
    form: { pm25Index: data.pm25 }
  }, function(err, response, body) {
    err && console.error(err);
    body && console.log(body);
  });
  console.log('PM2.5 index data: ' + data.pm25);
  console.log('PM1.0 index data: ' + data.pm10);
  console.log('PM10 index data: ' + data.pm100);
});
