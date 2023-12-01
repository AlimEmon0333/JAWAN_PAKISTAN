const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    shortName: {
        type: String,
        required: true,
    },
    courseFee: {
        type: Number,
    }
},
    {
        timestamps: true
    }
)

const   CourseModel = mongoose.model('courses', courseSchema)

module.exports = {CourseModel}