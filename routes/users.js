const express = require("express")
const router = express.Router()
const {
    checkBody
} = require("express-validator")
const usersController = require("../controllers/users")
const {
    validateConfirmPassword,
    validate
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
    upload.single("profilePicture"),
    // body("email").isEmail().normalizeEmail(),
    // [validateConfirmPassword],
    // [validate],
    // !!! re Test les middlewares
    usersController.handleSignup)
router.get("/login", usersController.getLoginPage)
router.post("/login", usersController.handleLogin)
router.get("/admin", authGard, usersController.getAdminPage)
router.get("/:id", usersController.getUserPage)

module.exports = router