const express = require("express")
const router = express.Router()
const {
    body
} = require("express-validator")
const usersController = require("../controllers/users")

router.get("/signup", usersController.getSignupPage)
router.post("/signup",
    body("password").isLength({
        min: 8
    }),
    body("password_confirm").isLength({
        min: 8
    }),
    usersController.handleSignup)
router.get("/login", usersController.getLoginPage)
router.post("/login", usersController.handleLogin)
router.get("/admin", usersController.getAdminPage)

module.exports = router