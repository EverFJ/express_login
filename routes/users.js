const express = require("express")
const router = express.Router()
const {
    body
} = require("express-validator")
const usersController = require("../controllers/users")
const {
    validateConfirmPassword
} = require("../middlewares/validate")
const authGard = require("../middlewares/authGard")
const session = require("../middlewares/session")
const multer = require("multer")
const upload = multer({
    dest: "public/uploads"
})

router.get("/", usersController.getHomePage)
router.get("/signup", usersController.getSignupPage)
router.post("/signup",
    body("email").isEmail(),
    [validateConfirmPassword],
    upload.single("profilePicture"),
    usersController.handleSignup)
router.get("/login", usersController.getLoginPage)
router.post("/login", usersController.handleLogin)
router.get("/admin", authGard, usersController.getAdminPage)
router.get("/:id", usersController.getUserPage)

module.exports = router