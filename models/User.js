const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstName: String,
    surname: String,
    profilePicture: String,
    dateOfBirth: Date
})

module.exports = mongoose.model("User", userSchema)