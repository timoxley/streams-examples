var net = require('net')
var reconnect = require('reconnect')

reconnect(function(socket) {
  console.log('connected')
  process.stdin.pipe(socket)
  socket.pipe(process.stdout)

}).connect(4000)

