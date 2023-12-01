// epress
const express = require('express')
// .env
require('dotenv').config();
// App
const App = express()
// use
App.use(express.json())

const courses = [
    {
        id: 1,
        name: "Web Development",
        shortName: "Web Dev",
        courseFee: 1000
    },
    {
        id: 2,
        name: "Graphic Designing",
        shortName: "Graphic Design",
        courseFee: 800
    },
    {
        id: 3,
        name: "Mobile App Development",
        shortName: "App Dev",
        courseFee: 1200
    },
    {
        id: 4,
        name: "Data Science",
        shortName: "Data Sci",
        courseFee: 1500
    },
    {
        id: 5,
        name: "Network Security",
        shortName: "Sec. Net",
        courseFee: 1100
    },
    {
        id: 6,
        name: "Python Programming",
        shortName: "Python",
        courseFee: 900
    },
    {
        id: 7,
        name: "Java Development",
        shortName: "Java Dev",
        courseFee: 1100
    },
    {
        id: 8,
        name: "Digital Marketing",
        shortName: "Digi. Mktg",
        courseFee: 850
    },
    {
        id: 9,
        name: "Machine Learning",
        shortName: "ML",
        courseFee: 1400
    },
    {
        id: 10,
        name: "Database Management",
        shortName: "DB Management",
        courseFee: 950
    },
    {
        id: 11,
        name: "Front-end Development",
        shortName: "Front-end Dev",
        courseFee: 1000
    },
    {
        id: 12,
        name: "Back-end Development",
        shortName: "Back-end Dev",
        courseFee: 1050
    },
    {
        id: 13,
        name: "UI/UX Design",
        shortName: "UI/UX",
        courseFee: 900
    },
    {
        id: 14,
        name: "Artificial Intelligence",
        shortName: "AI",
        courseFee: 1300
    },
    {
        id: 15,
        name: "Software Testing",
        shortName: "Testing",
        courseFee: 950
    },
    {
        id: 16,
        name: "Cybersecurity",
        shortName: "Cybersec",
        courseFee: 1200
    },
    {
        id: 17,
        name: "Cloud Computing",
        shortName: "Cloud",
        courseFee: 1100
    },
    {
        id: 18,
        name: "Game Development",
        shortName: "Game Dev",
        courseFee: 1050
    },
    {
        id: 19,
        name: "Data Analytics",
        shortName: "Data Analytics",
        courseFee: 1100
    },
    {
        id: 20,
        name: "DevOps",
        shortName: "DevOps",
        courseFee: 1150
    },
    {
        id: 21,
        name: "Digital Illustration",
        shortName: "Illus. Design",
        courseFee: 800
    },
    {
        id: 22,
        name: "Blockchain Development",
        shortName: "Blockchain",
        courseFee: 1250
    },
    // Add more courses here...
];

// get api func

App.get('/courses', (req, res) => {
    res.send(courses)
})

// get api with id func

App.get('/courses/:id', (req, res) => {
    let id = req.params.id
    let obj = courses.find(x => x.id == id)
    if (obj) {
        res.send({
            isSuccessfull: true,
            data: obj,
            message: ""
        })
    } else {
        res.send({
            isSuccessfull: true,
            data: null,
            message: "no data found"
        })
    }
})

// post api func

App.post('/courses', (req, res) => {
    let { name, shortName, courseFee } = req.body
    let obj = { name, shortName, courseFee }
    let errArray = []


    if (!obj.name) {
        errArray.push('Course name is required')
    }
    if (!obj.shortName) {
        errArray.push('Course short name is required')
    }
    if (!obj.courseFee) {
        errArray.push('Course fee is required')
    }
    if (errArray.length > 0) {
        res.send({
            isSuccessfull: false,
            message: "Validation error! :(",
            data: errArray
        })
    }
    else {
        obj.id = courses.length + 1
        courses.push(obj)
        res.send({
            isSuccessfull: true,
            message: "data added successfully! (:",
            data: obj
        })
    }

})

// put api func 

App.put('/courses/:id', (req, res) => {
    const courseID = req.params.id;
    const { name, shortName, courseFee } = req.body;
    const obj = { name, shortName, courseFee }
    let errArray = []
    const courseIndex = courses.findIndex((x) => x.id == courseID);
    if (!obj.name) {
        errArray.push("course name is required")
    }
    if (!obj.shortName) {
        errArray.push("course name is required")
    }
    if (!obj.courseFee) {
        errArray.push("course name is required")
    }
    if (errArray.length > 0) {
        res.send({
            isSuccessfull: false,
            data: errArray,
            message: `validation error finded! :(`,
        })
    }
    else {
        courses[courseIndex] = { id: courseID, data: obj };
        res.send({
            isSuccessfull: true,
            data: obj,
            message: `course with ID ${courseID} has been updated`,
        })
    }


})

// delete api func 
App.delete('/courses/:id', (req, res) => {
    let id = req.params.id
    let obj = courses.findIndex(course => course.id == id)
    courses.splice(obj, 1)
    if (obj) {
        res.send({
            isSuccessfull: true,
            data: obj,
            message: "course deleted",
        })
    } else {
        res.send({
            isSuccessfull: false,
            data: obj,
            message: "not deleted"
        })
    }
})

App.listen(process.env.PORT, () => {
    console.log(`server is listening http://localhost:${process.env.PORT}`)
})