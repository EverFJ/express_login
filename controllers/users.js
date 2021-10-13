const {
    validationResult
} = require("express-validator")
const User = require("../models/User")

const getHomePage = (req, res) => {
    res.render("home")
}
const getLoginPage = (req, res) => {
    res.render("login")
}
const getSignupPage = (req, res) => {
    res.render("signup")
}
const getAdminPage = (req, res) => {
    res.render("admin")
}
const handleSignup = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(500).json({
            errors: errors.array()
        })
        return
    }
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        surname: req.body.surname,
        dateOfBirth: req.body.dateOfBirth,
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
    // console.log("username", req.body.username)
    // console.log("password", req.body.password)
    User.findOne({
            username: req.body.username
        })
        .then((user) => {
            if (user.password === req.body.password) {
                req.session.loggedIn = true
                req.session.user = user
                const expiresAt = Date.now() + (1000 * 60 * 60 * 24)
                // Coookie creation
                res.setH
            }
        })
}

module.exports = {
    getHomePage,
    getLoginPage,
    getSignupPage,
    getAdminPage,
    handleLogin,
    handleSignup
}