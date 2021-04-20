const http = require('http')

const PORT = 3005

const server = http.createServer((req,res) => {
    // console.log(req.url);

    if (req.url === 'hello-something') {
        res.statusCode= 200
        res.end(`${req.url} is where you are at`)
    }else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('hello')
    }
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})