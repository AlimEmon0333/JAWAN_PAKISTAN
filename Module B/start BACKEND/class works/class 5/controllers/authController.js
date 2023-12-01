const sendResponse = require("../helper/authhelper")
const authModel = require("../model/authModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const AuthController = {
    signUp: async (req, res) => {
        try {
            let { userName, password, contactNumber } = req.body
            const signupObj = { userName, password, contactNumber }
            // create validation
            const signupErrArr = []
            if (!signupObj.userName) {
                signupErrArr.push("User name is required")
            }
            if (!signupObj.password) {
                signupErrArr.push("password is required")
            }
            if (!signupObj.contactNumber) {
                signupErrArr.push("contact number is required")
            }
            if (signupErrArr.length > 0) {
                res.status(400).send(sendResponse(false, "validation error", signupErrArr))
            }

            const signupUserExist = await authModel.findOne({ userName: signupObj.userName })
            if (signupUserExist) {
                res.status(400).send(sendResponse(false, "username is already exist"))
                return;
            }
            // validation completed!
            // let hash the password
            signupObj.password = await bcrypt.hash(signupObj.password, 10)
            // create user
            let User = new authModel(signupObj)
            let result = User.save()
            if (result) {
                res.status(200).send(sendResponse(true, "Congrates You are successfully signuped!", result))
            }
        } catch (error) {
            res.status(500).send(sendResponse(false, "Internal server error !", error))
        }
    },
    login: (req, res) => {
        const { userName, password, contactNumber } = req.body;
        const loginObj = { userName, password, contactNumber };

        // const loginUserExist = bcrypt.compare({
        //     loginObj.password,
        //     loginUserExist.password
        // })


    },
    // protected: (req, res, next) => {
    //     let token = req.headers.authorization?.split(" ")[1];
    //     if (!token) {
    //         res.status(401).send(sendResponse(false, "Un Authorized"))
    //     }
    //     if (token) {
    //         jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    //             if (err) {
    //                 res.status(401).send(sendResponse(false, "Un Authorized"))
    //             }
    //             if (decoded) {
    //                 next()
    //             }
    //         })
    //     }
    // }
}

// then we create protected route in courses such as = route.get("/", authController.protected ,courseController.get)

module.exports = AuthController