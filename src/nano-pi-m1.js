/**
 * Created by chotoxautinh on 6/4/17.
 */
var wpi = require('wiringPi');

wpi.setup();

const STATUS = {
    LOW: 0,
    HIGH: 1024
}

module.exports = ipcMain => {
    ipcMain.on('digitalWrite', (event, pinPort, value) => {
        try {
            const {HIGH, LOW} = wpi.value;
            wpi.pinMode(pinPort, wpi.mode.OUTPUT);
            wpi.digitalWrite(pinPort, value == STATUS.HIGH ? HIGH : LOW);
        } catch (err) {
            console.log(err);
        }

    });

    ipcMain.on('pwmWrite', (event, pinPort, value) => {
        try {
            wpi.pinMode(pinPort, wpi.mode.PWM_OUTPUT);
            wpi.pwmWrite(pinPort, value);
        } catch (err) {
            console.log(err);
        }
    });
}