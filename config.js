'use strict';

module.exports = {
  server: '127.0.0.1',
  port: 3000,
  // Device Type: `arduino`, `usbttl`, and `simulator`.
  deviceType: 'simulator',
  sensorKey: 'yourSensorKey',
  apiKey: 'yourApiKey',
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
