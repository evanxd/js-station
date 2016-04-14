JS Station
==========

This is a [node.js][nodejs] based sensor station, it reads data from USB serial device and send them to SensorWeb. You can run it on Windows, Mac OSX, Linux. 

Since our first initiative is to build a PM2.5 sensor network, we will demostrate below how to setup the station with PM sensor connected.

## Hardware Requirements

- USB 2 TTL Adapter
  - Currently tested adapters are based on PL2303/FT232RL/CP2102 chipsets, make sure yours have 5V output.
  - You can use Arduino as a serial adapter, which will allow you to connect more different sensors in the future.
- Plantower PM Sensor with Cable
  - Currently only tested with [PMS3003][PMS3003]

## Setup Steps

### Step 1: Install Driver or Firmware

If you use an USB 2 TTL Adapter but your computer can't detect it, try to install it's official driver. 
Below are driver download links for supported adapters:
* [PL2303 Driver][PL2303]
* [FT232RL Driver][FT232RL]
* [CP2102 Driver][CP2102]

If you are using Arduino, simply upload the firmware below with [Arduino IDE][ArduinoIDE].  
`https://github.com/sensor-web/arduino-station/blob/master/sensor/plantower-pms3003/plantower-pms3003.ino`

### Step 2: Connect Sensor

You only need to connect 4 pins of the PM Sensor, others should be left unconnected.

PM Sensor Pins| USB Adapter Pins
---------- | ----------
VCC (PIN1) | +5V
GND (PIN2) | GND
RXD (PIN4) | TXD
TXD (PIN5) | RXD

### Step 3: Setup and Run

Clone the repo: `git clone https://github.com/sensor-web/js-station`

Go to the `js-station` directory.

Do `npm install` to install dependencies.

Edit `config.js` to put your `sensorId` and `apiKey` in it,  
set `serialDeviceType: 'usbttl'` if you're using supported USB 2 TTL Adpater,  
or `serialDeviceType: 'arduino'` if you're using Arduino

Run `node app.js` then you'll see console output if success.

## Maintainers
* [Evan Tseng](https://github.com/evanxd)
* [Eddie Lin](https://github.com/yshlin)

[nodejs]: http://nodejs.org
[PMS3003]: https://goo.gl/CIVGjF
[PL2303]: http://goo.gl/KuqY4h
[CP2102]: http://goo.gl/jSnHO0
[FT232RL]: http://goo.gl/IYHhQI
[ArduinoIDE]: https://www.arduino.cc/en/Main/Software
