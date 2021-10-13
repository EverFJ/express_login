const {
    validationResult
} = require("express-validator")

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

}
const handleLogin = (req, res) => {

}

module.exports = {
    getLoginPage,
    getSignupPage,
    getAdminPage,
    handleLogin,
    handleSignup
}