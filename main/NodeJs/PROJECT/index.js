// first project with node n express with HTTP methods ___________________
const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;

//Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
})
app.get('/users', (req,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li> ${user.first_name} </li>`).join('')}
    </ul>
    `;
    res.send(html);
})
app.get('/users/:id', (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    return res.json(user)
})
app.post('/users', (req, res) => {
    //TODO : create a new user
    return res.json({status: 'pending'});
})
app.patch('/users/:id', (req, res) => {
    //TODO: edit the user with id
    return res.json({status: 'pending'});
})
app.delete('users/:id', (req, res) => {
    //TODO: delete the user with id
    return res.json({status: 'pending'});
})



// AS THE ROUTE IS SAME SO PERFORMING THE HTTP METHOD WITH THIS ANOTHER WAY, SHORT CUT ONE (precise way)-------
// app
//     .route('api/users/:id')
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id)
//         return res.json(user)
//     })
//     .patch((req, res) => {
//         //TODO: edit the user with id
//         return res.json({status: 'pending'});
//     })
//     .delete((req, res) => {
//         //TODO: delete the user with id
//         return res.json({status: 'pending'});
//     })


app.listen(PORT, () => console.log(`Backend Server Started at Port : ${PORT}`))
