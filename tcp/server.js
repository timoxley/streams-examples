var net = require('net')

net.createServer(function(socket) {
  console.log('something connected')
  process.stdin.pipe(socket).pipe(process.stdout)
}).listen(4000)
