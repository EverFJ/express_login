const {
    validationResult
} = require("express-validator")
const fs = require("fs")
const path = require("path")
const User = require("../models/User")

const getHomePage = (req, res) => {
    res.render("home")
}
const getUserPage = (req, res) => {
    const userId = req.params.id
    User.findOne({
            _id: userId
        }).lean()
        .then((user) => {
            res.render("user", {
                user: user
            })
            // !!! Try this : 
            // res.render("user", {user})

        })
        .catch(err => {
            console.error(err)
            res.status(500).json(err)
        })
}
const getLoginPage = (req, res) => {
    res.render("login")
}
const getSignupPage = (req, res) => {
    res.render("signup")
}
const getAdminPage = (req, res) => {
    User.find().lean()
        .then(users => {
            res.render("admin", {
                users: users
            })
            // !!! Try this : 
            // res.render("admin", {users})
        })
        .catch(err => {
            console.error(err)
            res.status(500).json(err)
        })
}
const handleSignup = (req, res) => {
    console.log(`req.body`, req.body)
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(500).json({
            errors: errors.array()
        })
        return
    }
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname))

    const user = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        surname: req.body.surname,
        dateOfBirth: req.body.dateOfBirth,
        profilePicture: req.file ? req.file.originalname : ""
        // !!! Test this :
        // ...req.body, profilePicture: req.file ? req.file.originalname : ""
    })
    user.save()
        .then(response => {
            res.render("home", {
                user: response.toObject()
            })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json(err)
        })
}

const handleLogin = (req, res) => {
    User.findOne({
            username: req.body.username
        })
        .then((user) => {
            if (user.password === req.body.password) {
                req.session.loggedIn = true
                req.session.user = user
                const expiresAt = Date.now() + (1000 * 60 * 60 * 24 * 30)
                // Cookie creation
                res.setHeader('Set-Cookie', 'loggedIn=true; path=/; Expires=' + new Date(expiresAt).toUTCString())
                return res.redirect("/users/admin")
            }
            return res.status(500).json(new Error("Wrong password").message)
        })
        .catch(err => {
            console.error(err)
            res.status(404).json({
                error: err
            })
        })
}

module.exports = {
    getHomePage,
    getLoginPage,
    getSignupPage,
    getAdminPage,
    handleLogin,
    handleSignup,
    getUserPage
}