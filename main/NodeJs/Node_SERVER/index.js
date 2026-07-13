// const http = require('http')
// const fs = require('fs')



// const arpita = http.createServer((req, res) => {
//     console.log("new request receive")
//     console.log(req) // whole info about what kind o request and from where the request is coming
//     res.end("hello from server")
// });


// arpita.listen(8000, () => console.log('started'));

// const http = require('http')
// const express = require('express')

// const app = express();
// app.get('/', (req,res) => {
//     return res.send('Hello from Home page' + ' hi ' + req.query.name); //https://localhost:8000/?name=arpita :=> Hello from Home page hi arpita
// });

// app.get('/about', (req,res) => {
//     return res.send('Hello from about page')
// });

// const myServer = http.createServer(app)

// myServer.listen(8000, () => console.log('Server Started'))


//EXPRESS_____


const express = require('express')

const app = express();
app.get('/', (req,res) => {
    return res.send('Hello from Home page' + ' hi ' + req.query.name + ' Hello whos age is :' + req.query.age ); //https://localhost:8000/?name=arpita :=> Hello from Home page hi arpita
});

app.get('/about', (req,res) => {
    return res.send(`Hello ${req.query.name}`)
});

app.listen(8000, () => console.log("Backend Server Started"));

// const myServer = http.createServer(app)
//npm i express@4.18.2 
// ^5.2.1 => 2.1 can be chnaged but nor 5
// ^ - install all recommended and minor fixes automatically *5.3.0 ok , 6.2.1 not ok
//~5.2.1 => .1 can be changed but not 5.2
// ~ - install all the minor fixes automatically *5.2.4 ok , 5.3.1 not ok = 5.2.x
// myServer.listen(8000, () => console.log('Server Started'))


