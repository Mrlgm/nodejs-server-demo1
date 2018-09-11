var http = require('http');
var fs = require('fs');
let index=fs.readFileSync('index.html')
let server=http.createServer(function (req, res) {
  res.write(index)
  res.end()
})
server.listen(8888)