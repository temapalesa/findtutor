const express = require('express');
const bodyParser = require('body-parser');
const { request, response } = require('express');
const app = express();
const port =  8080;


const db = require('./queries');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}))

app.get('/', (request, response)=>{
    response.json({ info : 'FindTutor app is running!'})

})

app.get('/users', db.getUsers)
app.post('/users' ,db.register)
app.post('/login', db.login)

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`)
})