var net = require('net')
var http = require('http')

var ecstatic = require('ecstatic')
var shoe = require('shoe')
var sf = require('slice-file')

var app = http.createServer(ecstatic(__dirname + '/public'))

var sock = shoe(function(stream) {
  var systemLog = sf('/var/log/system.log')
  systemLog.follow(-10).pipe(stream)
})
sock.install(app, '/logs')

app.listen(4000)

