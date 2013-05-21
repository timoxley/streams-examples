var Stream = require('stream')
var through = require('through')
var inherits = require('util').inherits

var values = [1,2,3,4,5,6,7,8,9]

function ValueStream() {
  Stream.Readable.call(this)
}

inherits(ValueStream, Stream.Readable)

ValueStream.prototype._read = function() {
  var value = values.pop()
  if (value === undefined) return this.push(null)
  this.push(String(value))
}

var valueStream = new ValueStream()

valueStream.pipe(process.stdout)

