// var io = require('../io/lamp');
var shell = require('shelljs');

module.exports.pushQueue = function(queue, data) {
  try {
    var str = JSON.parse(data);
    var idDivece = str.idDivece;
    var idFunction = str.idFunction;
    var value = str.value;

    var convert_str = '_' + idDivece + '_1_' + idFunction + '_' + value;

    queue.push(new Buffer(convert_str), (err) => {
    // This callback is optional; it is called once the message is placed in the queue.
    console.log(convert_str);
    });
  } catch (e) {
    console.log('Не верный формат данных');
  } finally {

  }
}

module.exports.readQueue = function(queue, funct) {
  queue.on('data', (data) => {
    try {
      var array = data.toString().split('_');
      if (array.length = 6){
        // io.lamp(array[5])
        // shell.exec('./lampo.sh ${array[5]}');
        funct(array);
      }
    } catch (e) {
      console.log('no no no no');
      console.log(e);
    } finally {
    }
    console.log(data.toString());
  });
}
