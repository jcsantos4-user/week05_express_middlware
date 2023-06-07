const express  = require("express")
const app = express()
const path = require("path")
const usersRouters = require("./routers/users")
const SERVER_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on: " + SERVER_PORT)
}

//folder that contains home.html
app.use(express.static("./views"))
app.use(express.static("./views/html"))
// app.use(usersRouters)
app.use("/users", usersRouters)

//Application middleware ~ always called
app.use((req, res, next)=>{
    console.log("Middleware - 1: "+req.url)
    next()
})

app.use("/college",(req,res, next) => {
    console.log("College Middleware: " + req.url);
    next()
})

//localhost:8080/test/home.html
// app.use("/test", express.static("./views"))

app.get("/",(req,res) => {
    res.send("hello world");
})

app.get("/student",(req,res) => {
    res.send("Student");
})

app.get("/college/name",(req,res) => {
    res.send("Seneca College");
})

app.listen(SERVER_PORT, onHttpStart);