var fs = require('fs')
var stream = fs.createReadStream(__dirname + '/large.png', {bufferSize: 1})

// this shows the length of each chunk of data as it goes through the stream
stream.on('data', function(data) {
  console.log('data', data.length)
})


