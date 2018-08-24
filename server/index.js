require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const port = 3200
const ctrl = require('./controller')

const app = express()

app.use(bodyParser.json())

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(err => console.log(err))

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/posts', ctrl.getPosts)
app.get('/api/single/:postid', ctrl.singlePost)
app.put('/api/content', ctrl.editContent)

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})