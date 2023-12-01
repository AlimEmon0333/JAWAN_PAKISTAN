const express = require("express")
const mongoose = require("mongoose")
const authRoute = require("./router/authrouter")
const App = express()

require("dotenv").config()
App.use(express.json())
App.use("/auth" , authRoute)
// sever
mongoose
    .connect(process.env.URI).then((res) => {
        App.listen(process.env.PORT, () => {
            console.log(`database connected and app is listening http://localhost:${process.env.PORT}`)
        })
    }).catch((err) => {
        console.log(err)
    })