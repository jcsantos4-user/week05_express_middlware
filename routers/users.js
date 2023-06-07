var express = require("express")
var router = express.Router()

router.get("/employee", (req, res) => {
    const emp = {
        eid:1,
        enm: "Pritesh",
        salary: 100.50,
        type: "Employee"

    }
    res.json(emp)
})

router.get("/faculty", (req, res) => {
    const faculty = {
        fid:1,
        name: "John",
        city: "Toronto",
        college: "Seneca"
    }
    //http://www.iana.org/assignments/media-types/media-types.xhtml

    // res.setHeader('Content-Type', 'application/json')
    // res.send(JSON.stringify(faculty))
    res.send(faculty)
})

router.post("/fulltimefaculty", (req, res) => {
    const faculty = {
        fid:2,
        name: "Mark",
        city: "Andres",
        college: "GBC"

    }
    // //http://www.iana.org/assignments/media-types/media-types.xhtml

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(faculty))
})

router.patch("/student",(req,res)=>{
    res.send("<h1> PATCH - Record deleted </h1>")
})

router.delete("/student",(req,res)=>{
    res.status(201).send("<h1> DELETE - Record deleted </h1>")
})

router.put("/student",(req,res)=>{
    res.send("<h1> PUT - Record deleted </h1>")
})

// router.get("/student", (req, res) => {
//     const stud = {
//         sid:1,
//         snm: "Ahmed",
//         result: 'Pass',
//         type: "Student"
//     }
//     res.json(stud)
// })

module.exports = router