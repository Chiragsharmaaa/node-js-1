const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Chirag')
    res.end('Chirag')
})

server.listen(3000)