const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")
const path = require("path")
const session = require("./middlewares/session")
const usersRoutes = require("./routes/users")
const port = 8000
const db = "mongodb://localhost:27017/express_login"

app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts")
}))
app.set("view engine", "hbs")
app.set("views", "views")

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
//Session Middleware
app.use(session)
app.use("/users", usersRoutes)

mongoose.connect(db, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`MongoDB connected to ${db} successfully`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})