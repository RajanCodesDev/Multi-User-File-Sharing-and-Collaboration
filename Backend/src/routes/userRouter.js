import express from 'express'
import { loginController, registerController} from "../controller/authController.js"



// Create Router
const userRouter = express.Router()


// Routes
userRouter.post('/register', registerController)
userRouter.post('/login', loginController)

export default userRouter