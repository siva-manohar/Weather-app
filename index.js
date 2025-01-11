var http = require('http')

var port = 3000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)

console.log('application is running successfully')