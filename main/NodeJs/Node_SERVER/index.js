// const http = require('http')
// const fs = require('fs')



// const arpita = http.createServer((req, res) => {
//     console.log("new request receive")
//     console.log(req) // whole info about what kind o request and from where the request is coming
//     res.end("hello from server")
// });


// arpita.listen(8000, () => console.log('started'));

const http = require('http')
const express = require('express')

const app = express();
app.get('/', (req,res) => {
    return res.send('Hello from Home page' + ' hi ' + req.query.name); //https://localhost:8000/?name=arpita :=> Hello from Home page hi arpita
});

app.get('/about', (req,res) => {
    return res.send('Hello from about page')
});

const myServer = http.createServer(app)

myServer.listen(8000, () => console.log('Server Started'))