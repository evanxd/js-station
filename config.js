'use strict';

module.exports = {
  server: 'localhost',
  port: 8081,
  // Device Type: `arduino`, `linkit`, `usbttl`, and `simulator`.
  deviceType: 'simulator',
  sensorId: 'sensorId',
  apiKey: 'apiKey',
  // The simulator options.
  simulator: {
    samplingRate: 5000,
    dataRange: {
      pm10: { min: 1, max: 10 },
      pm25: { min: 1, max: 10 },
      pm100: { min: 10, max: 20 }
    }
  }
};
