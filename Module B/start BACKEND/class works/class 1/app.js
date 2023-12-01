const fs = require("fs")
const path = require("path")
const http = require("http")

fs.readFile("./abc.txt",(err,data)=>{
    if(err){
        console.log({err})
    }
    else{
        console.log({data})
    }
})


// fs.writeFile("./abc.txt","ali is ",()=>{
//     console.log("data written")
// })


// fs.appendFile("./abc.txt"," 03032663832",()=>{
//     console.log("data edited sucess")
// })


// // console.log(__dirname)
// // console.log(__filename)

// const students = [
//     {
//         name: "ali",
//         fname: "amin",
//         class: "nine",
//         religion: "muslim",
//     },
//     {
//         name: "adil",
//         fname: "haroon",
//         class: "matric",
//         religion: "muslim",
//     },
//     {
//         name: "samad",
//         fname: "rasheed",
//         class: "2nd year",
//         religion: "muslim",
//     },
// ]

// const server = http.createServer((req, res) => {
//     if (req.url == "/students") {
//         if (req.method == "PUT") {
//             console.log(req.method)
//             res.write(JSON.stringify(students))
//         }
//     }
//     res.end();
// })
// server.listen(3000)



//  _____________________________express work start

// const express = require("express")

// const App = express();

// const students = [
//     {
//         name: "ali",
//         fname: "amin",
//         class: "nine",
//         religion: "muslim",
//     },
//     {
//         name: "adil",
//         fname: "haroon",
//         class: "matric",
//         religion: "muslim",
//     },
//     {
//         name: "samad",
//         fname: "rasheed",
//         class: "2nd year",
//         religion: "muslim",
//     },
// ]

// App.get("/students", (req, res) => {
//     res.send(students)
// })

// // App.post()

// // App.put()

// // App.delete()

// App.listen(5000, () => {
//     console.log("server is listening http://localhost:5000")
// })

