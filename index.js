const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const path = require("path")
const port = 8000
const usersRoutes = require("./routes/users")

app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts")
}))
app.set("view engine", "hbs")
app.set("views", "views")

app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})