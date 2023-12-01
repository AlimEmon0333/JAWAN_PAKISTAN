const express = require('express')
const courseController = require('../controllers/courseController')
const route = express.Router()


// get api func

route.get('/', courseController.get)

// get api with id func

route.get('/:id', courseController.getById)

// post api func

route.post('/', courseController.add)

// put api func 

route.put('/:id', courseController.edit)

// delete api func 

route.delete('/:id', courseController.del)






module.exports = route