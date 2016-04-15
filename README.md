# JS Station

This is a [node.js][nodejs] based sensor station, it reads data from USB serial device and send them to SensorWeb. You can run it on Mac OS, Linux, and Windows.

Since our first initiative is to build a PM2.5 sensor network, we will demostrate below how to setup the station with PM sensor connected.

## Hardware Requirements

- Arduino Board
  - Currently we only develope and test it on [Arduino Uno][arduino-uno].
- USB 2 TTL Adapter
  - Currently tested adapters are based on PL2303/FT232RL/CP2102 chipsets, make sure yours have 5V output.
  - You can use Arduino as a serial adapter, which will allow you to connect more different sensors in the future.
- Plantower PM Sensor with Cable
  - Currently only tested with [PMS3003][PMS3003]
  - 5V input, communicate via UART
  - Great accuracy according to [comparative measurment on AQICN][aqicn-measurment]
  - $17 USD

## Setup Steps

### Step 1: Install Arduino Firmware or USB to TTL Driver

If you use Arduino, simply upload the [Plantower PMS3003 firmware][plantower-pms3003-firmware] with [Arduino IDE][arduino-ide].

If you use an USB to TTL Adapter but your computer can't detect it, try to install it's official driver.
Below are driver download links for supported adapters:
* [PL2303 Driver][PL2303]
* [FT232RL Driver][FT232RL]
* [CP2102 Driver][CP2102]

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

Edit `config.js` to put your `sensorId` and `apiKey` in it, `serialDeviceType: 'arduino'` if you're using Arduino or set `serialDeviceType: 'usbttl'` if you're using supported USB to TTL Adpater.

Run `node app.js` then you'll see console output if success.

## Maintainers
* [Evan Tseng](https://github.com/evanxd)
* [Eddie Lin](https://github.com/yshlin)

[nodejs]: http://nodejs.org
[PMS3003]: https://goo.gl/CIVGjF
[PL2303]: http://goo.gl/KuqY4h
[CP2102]: http://goo.gl/jSnHO0
[FT232RL]: http://goo.gl/IYHhQI
[arduino-ide]: https://www.arduino.cc/en/Main/Software
[aqicn-measurment]: http://aqicn.org/sensor/
[arduino-uno]: https://www.arduino.cc/en/main/arduinoBoardUno
[plantower-pms3003-firmware]: https://github.com/sensor-web/arduino-station/blob/master/sensor/plantower-pms3003/plantower-pms3003.ino
