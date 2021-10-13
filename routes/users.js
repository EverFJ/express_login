const express = require("express")
const router = express.Router()
const {
    body
} = require("express-validator")
const usersController = require("../controllers/users")
const authGard = require("../middlewares/auth-gard")
const session = require("../middlewares/session")

router.get("/signup", usersController.getSignupPage)
router.post("/signup",
    body("email").isEmail(),
    body("password").isLength({
        min: 8
    }),
    body("password_confirm").isLength({
        min: 8
    }),
    // Check if both passwords are equals

    usersController.handleSignup)
router.get("/login", usersController.getLoginPage)
router.post("/login", usersController.handleLogin)
router.get("/admin", authGard, usersController.getAdminPage)

module.exports = router