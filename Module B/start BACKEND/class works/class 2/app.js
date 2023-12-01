// npm i express

const express = require("express")

// npm i dotenv

require("dotenv").config();

const App = express();

App.use(express.json)

const courses = [
    {
        id: 1,
        Name: "Web Development",
        ShortName: "Web Dev",
        courseFee: 1000
    },
    {
        id: 2,
        Name: "Graphic Designing",
        ShortName: "Graphic Design",
        courseFee: 800
    },
    {
        id: 3,
        Name: "Mobile App Development",
        ShortName: "App Dev",
        courseFee: 1200
    },
    {
        id: 4,
        Name: "Data Science",
        ShortName: "Data Sci",
        courseFee: 1500
    },
    {
        id: 5,
        Name: "Network Security",
        ShortName: "Sec. Net",
        courseFee: 1100
    },
    {
        id: 6,
        Name: "Python Programming",
        ShortName: "Python",
        courseFee: 900
    },
    {
        id: 7,
        Name: "Java Development",
        ShortName: "Java Dev",
        courseFee: 1100
    },
    {
        id: 8,
        Name: "Digital Marketing",
        ShortName: "Digi. Mktg",
        courseFee: 850
    },
    {
        id: 9,
        Name: "Machine Learning",
        ShortName: "ML",
        courseFee: 1400
    },
    {
        id: 10,
        Name: "Database Management",
        ShortName: "DB Management",
        courseFee: 950
    },
    {
        id: 11,
        Name: "Front-end Development",
        ShortName: "Front-end Dev",
        courseFee: 1000
    },
    {
        id: 12,
        Name: "Back-end Development",
        ShortName: "Back-end Dev",
        courseFee: 1050
    },
    {
        id: 13,
        Name: "UI/UX Design",
        ShortName: "UI/UX",
        courseFee: 900
    },
    {
        id: 14,
        Name: "Artificial Intelligence",
        ShortName: "AI",
        courseFee: 1300
    },
    {
        id: 15,
        Name: "Software Testing",
        ShortName: "Testing",
        courseFee: 950
    },
    {
        id: 16,
        Name: "Cybersecurity",
        ShortName: "Cybersec",
        courseFee: 1200
    },
    {
        id: 17,
        Name: "Cloud Computing",
        ShortName: "Cloud",
        courseFee: 1100
    },
    {
        id: 18,
        Name: "Game Development",
        ShortName: "Game Dev",
        courseFee: 1050
    },
    {
        id: 19,
        Name: "Data Analytics",
        ShortName: "Data Analytics",
        courseFee: 1100
    },
    {
        id: 20,
        Name: "DevOps",
        ShortName: "DevOps",
        courseFee: 1150
    },
    {
        id: 21,
        Name: "Digital Illustration",
        ShortName: "Illus. Design",
        courseFee: 800
    },
    {
        id: 22,
        Name: "Blockchain Development",
        ShortName: "Blockchain",
        courseFee: 1250
    },
    // Add more courses here...
];

App.get("/course", (req, res) => {
    res.send(courses)
})

App.get("/course/:id", (req, res) => {
    let id = req.params.id
    let obj = courses.find(x => x.id == id)
    if (obj) {
        res.send({
            isSuccessfull: true,
            data: obj,
            messages: "",
        })
    } else {
        res.send({
            isSuccessfull: true,
            data: null,
            messages: "no data found",
        })
    }
})

App.post("/course", (req, res) => {
    let { Name, ShortName, courseFee } = req.body
    let obj = { Name, ShortName, courseFee }

    let errArr = []

    if (!obj.Name) {
        errArr.push('Required Full Name')
    }
    if (!obj.ShortName) {
        errArr.push('Required Short Name')
    }
    if (!obj.courseFee) {
        errArr.push('Required course Fee')
    }
    if (errArr.length > 0) {
        res.send({
            isSuccessfull: false,
            message: "Validation Error! :(",
            data: errArr,
        })
    } else {
        obj.id = courses.length + 1;

        courses.push(obj)

        res.send({
            isSuccessfull: true,
            message: 'Data Added Successfully',
            data: obj
        })
    }
    res.send(obj)
})



App.listen(process.env.PORT, () => {
    console.log(`server is listening http://localhost:${process.env.PORT}`)
});

