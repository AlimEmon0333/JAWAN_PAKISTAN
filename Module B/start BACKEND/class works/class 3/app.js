// epress import
const express = require('express')
const mongoose = require("mongoose");

// courses import
const courses = require('./routes/courseRoutes')

// .env
require('dotenv').config();

// App
const App = express()

// uses
App.use(express.json())
App.use('/courses', courses)

// server
mongoose
    .connect(process.env.MONGO_URI)
  .then((res) => {
      App.listen(process.env.PORT, () => {
          console.log(
              `Database Connected and server is listening http://localhost:${process.env.PORT}`
          );
      });
  })
  .catch((err) => {
    console.log("err", err);
  });
