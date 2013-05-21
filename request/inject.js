var request = require('request')
var through = require('through')
var log = require('debug')('inject')
var net = require('net')

var injectScript = through(function(data) {
  log('data.length %d', data.length)
  var text = data.toString()
  if (text.match(/<\/body>/)) {
    log('matched closing body tag')
    text = text.replace('</body>','<script>console.log("Injection!")</script></body>')
  }
  this.push(text)
})

net.createServer(function(socket) {
  request('https://twitter.com/secoif')
  .pipe(injectScript)
  .pipe(socket)
}).listen(4000)
