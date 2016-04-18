'use strict';

var request = require('request');
var config = require('./config');
var device = require(`./lib/${config.deviceType}`);
var POST_API = `http://${config.server}:${config.port}/sensors/` +
               `${config.sensorKey}/data?apiKey=${config.apiKey}`;

device.on('data', function(data) {
  request.post(POST_API, {
    form: { pm25Index: data.pm25 }
  }, function(err, response, body) {
    if (err) {
      console.error(err);
    } else {
      console.log(body);
    }
  });
  console.log('PM1.0 index: ' + data.pm10);
  console.log('PM2.5 index: ' + data.pm25);
  console.log('PM10 index: ' + data.pm100);
});
