const http = require('http')

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${requestAnimationFrame.method} ${req.url} \n New Request Received \n`
})
