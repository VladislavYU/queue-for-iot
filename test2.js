
var test = require('./queue/queueFun')
var json = '{ "idDivece" : 0, "idFunction" : 0, "value" : 1 }'
var shell = require('shelljs');

const key1 = 555
const key2 = 666

var queue5 = require('svmq').open(key1);
var queue6 = require('svmq').open(key2);

var pushInQueue6 = function(array) {
  // test.pushQueue(queue6, )
}

var enableLamp = function(array) {
  shell.exec('./lampo.sh ${array[5]}');
}


test.readQueue(queue5, enableLamp);
test.pushQueue(queue5, json);
