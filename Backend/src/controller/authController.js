import bcrypt from 'bcrypt'
import { checkmissing } from '../utils/checkmissingparamregister.js'
import userexists from '../utils/checkifuserexists.js'
import userModel from '../models/users.js'

// register controller
const registerController = async (req, res) => {
    try {
        // get data about register user
        const { username, email, password } = req.body


        // check for missing feilds
        const missingMessage = checkmissing(req.body)
        if (missingMessage) {
            return res.send(missingMessage)
        }


        //  Hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)


        // check if username or email exists
        const exists = await userexists(username)
        if (exists) {
            res.status(409).send({
                message: `${username} already exists`,
            })
        }

        // store data in DB
        const newdata = await userModel.create({
            username,
            email,
            password: hashedpassword
        })
        console.log(`${username} is successfully registered`)

        // save the data
        res.status(201).send({
            newdata
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}



// login controller
const loginController = async (req, res) => {
    try {
        // check if feilds are there
        const { id, password } = req.body
        if (!id) {
            res.send({
                message: "Username or Email is required"
            })
        }


        // check if username or email exists
        const user = await userModel.findOne({
            $or: [{username: id}, {email: id}]
        })
        if (!user) {
            res.status(409).send({
                message: `${id} does not exist`,
            })
        }else{
            const passwordcompare = bcrypt.compare(password, user.password)
            console.log("exists")
            res.send({
                user
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Internal server Error"
        })
    }
}



// export modules
export { loginController, registerController }