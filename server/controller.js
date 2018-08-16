const register = (req, res, next) => {
    let { username, password } = req.body
    const db = req.app.get('db')
    db.register([username, password])
        .then(newUser => {
            console.log(newUser)
            res.status(200).send(newUser)
        }).catch(err => { console.log(err) })
}

const login = (req, res, next) => {
    let { username, password } = req.body
    req.app.get('db').login([username, password])
        .then(loggedIn => {
            console.log(loggedIn)
            res.status(200).send(loggedIn)
        }).catch(err => { console.log(err) })
}

module.exports = {
    register,
    login
}