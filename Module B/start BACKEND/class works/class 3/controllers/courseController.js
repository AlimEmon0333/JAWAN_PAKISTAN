// imports
const { sendResponseOfCourses } = require('../helpers/courseHelper')
const { CourseModel } = require('../models/courseModel')

// courses array
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

// controller
const courseController = {
    // get api func
    get: async (req, res) => {
        try {
            let result = await CourseModel.find()
            res.send(sendResponseOfCourses(true, "data sended", result))
        } catch (error) {
            res.send(sendResponseOfCourses(true, "data not sended", error))
        }
    },

    // get api with id func
    getById: async (req, res) => {
        try {
            let id = req.params.id
            let result = await CourseModel.findById(id)
            res.status(200).send(sendResponseOfCourses(true, '', result))
        } catch (error) {
            res.send(res.status(400).send(sendResponseOfCourses(true, error, null)))
        }


    },

    // post or add api func
    add: async (req, res) => {
        try {
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
                res.send(sendResponseOfCourses(false, 'validation error !', errArray))
            }
            else {
                const Course = new CourseModel(obj)
                const result = await Course.save()
                res.send(sendResponseOfCourses(true, 'data added successfully!', result))
            }
        } catch (error) {
            res.send(sendResponseOfCourses(false, error, null))
        }
    },

    // put or edit api func 
    edit: async (req, res) => {
        try {
            const { name, shortName, courseFee } = req.body;
            const obj = { name, shortName, courseFee }
            let errArray = []
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
                res.send(sendResponseOfCourses(false, 'validation error find!', errArray))
            }
            else {
                const courseID = req.params.id;
                const updateCourse = await CourseModel.findByIdAndUpdate(courseID, obj);
                if (!obj) {
                    console.log('Document not found.');
                    return;
                }
                res.send(sendResponseOfCourses(true, "data edited successfylly!", updateCourse))
            }
        } catch (error) {
            res.send(sendResponseOfCourses(false, error, null))
        }
    },

    // delete or del api func
    del: (req, res) => {
        try {
            let id = req.params.id
            CourseModel.findByIdAndDelete(id)
                .then(() => {
                    res.send(sendResponseOfCourses(true, 'course deleted success ! (:'))
                }).catch((err) => {
                    res.send(sendResponseOfCourses(false, 'internal sever error ! :(', err))
                })
        } catch (error) {
            res.send(sendResponseOfCourses(false, 'course deleted ! :(', err))
        }
    },
}

module.exports = courseController