const {
    validationResult
} = require("express-validator")
const User = require("../models/User")


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
    console.log("user", user)
    res.json(user)

}
const handleLogin = (req, res) => {
    console.log("username", req.body.username)
    console.log("password", req.body.password)
    res.json(req.body)
}

module.exports = {
    getLoginPage,
    getSignupPage,
    getAdminPage,
    handleLogin,
    handleSignup
}