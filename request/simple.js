var request = require('superagent')

var zlib = require('zlib')
var gzip = zlib.createUnzip();
request('https://gist.github.com/timoxley/5618462/raw/7ea74e50763bc3d6306c570137a8f7c93da733f5/test.json')
.pipe(process.stdout)
