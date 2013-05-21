var shoe = require('shoe')
var through = require('through')

var stream = shoe('/logs')
var console = document.querySelector('#console')
stream.pipe(through(function(msg) {
  var el = document.createElement('div')
  el.innerHTML = msg
  console.appendChild(el)
}))
