var from = require('from')
var through = require('through')

var values = [1,2,3,4,5,6,7,8,9]

var valueStream = from(values).pipe(through(function(value) {
  // convert to string, process.stdout does not accept Numbers
  this.push(String(value))
}))

valueStream.pipe(process.stdout)
