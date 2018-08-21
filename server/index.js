require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const massive = require('massive')
const port = 3200
const ctrl = require('./controller')

const app = express()

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(err => console.log(err))

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/posts', ctrl.getPosts)

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})