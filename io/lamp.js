const Gpio = require('orange-pi-gpio')


module.exports.lamp = function(value) {
  let gpio = new Gpio({pin: 31, mode: "out"})
  try {
    gpio.write(value)
    gpio.read()
      .then((state))=>{
        console.log(state);
      }
  } catch (e) {
    console.log("Не верное значение");
  } finally {

  }
}
