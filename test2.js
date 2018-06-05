
var test = require('./queue/queueFun')
var json = '{ "idDivece" : 0, "idFunction" : 0, "value" : 1 }'

const key1 = 555
const key2 = 666

var queue = require('svmq').open(555);

test.readQueue(queue);
test.pushQueue(queue, json);
