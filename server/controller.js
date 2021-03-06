const register = (req, res, next) => {
    let { username, password } = req.body
    const db = req.app.get('db')
    db.register([username, password])
        .then(newUser => {
            req.session.userid = newUser[0].id;
            console.log("LOOK:", req.session)
            res.status(200).send(newUser)
        }).catch(err => { console.log(err) })
}

const login = (req, res, next) => {
    let { username, password } = req.body
    req.app.get('db').login([username, password])
        .then(loggedIn => {
            req.session.userid = loggedIn[0].id;
            console.log(loggedIn)
            console.log("LOOK:", req.session)
            res.status(200).send(loggedIn)
        }).catch(err => { console.log(err) })
}

const getPosts = (req, res, next) => {
    let { userposts, search, id } = req.query
    console.log(req.session)
    if (userposts && search.length > 0) {
        req.app.get('db').post_title(search).then(posts => {
            return res.status(200).send(posts)
        }).catch(err => { console.log(err) })
    }
    // else if (userposts === false && !search) {
    //     req.app.get('db').get_posts([])
    //         .then(posts => {
    //             res.status(200).send(posts)
    //         }).catch(err => { console.log(err) })

    // }
}

const singlePost = (req, res, next) => {
    const { postid } = req.params
    console.log(postid)
    req.app.get('db').get_posts(postid).then(single => {
        return res.status(200).send(single)
    }).catch(err => { console.log(err) })
}

const editContent = (req, res, next) => {
    const { content, id } = req.body
    console.log(content, id)
    req.app.get('db').editPost(content, id)
        .then(edit => {
            res.status(200).send(edit)
        }).catch(err => { console.log(err) })
}


module.exports = {
    register,
    login,
    getPosts,
    singlePost,
    editContent
}