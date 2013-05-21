var request = require('request')
var through = require('through')
var JSONStream = require('JSONStream')

request('https://gist.github.com/timoxley/5618462/raw/7ea74e50763bc3d6306c570137a8f7c93da733f5/test.json')
.pipe(JSONStream.parse('data.*'))
.pipe(through(function(data) {
  this.push(data.name.toUpperCase() + '\n')
}))
.pipe(process.stdout)
