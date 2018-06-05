const Gpio = require('orange-pi-gpio')


module.exports.lamp = function(value) {
  "use strict";
  let gpio = new Gpio({pin: 31, mode: 'out', ready: ()=>{})
  try {
    gpio.write(value)
    // gpio.read()
    //   .then((state))=>{
    //     console.log(state);
    //   }
  } catch (e) {
    console.log("Не верное значение");
  } finally {

  }
}
