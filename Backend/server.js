import 'dotenv/config'
import userRouter from './src/routes/userRouter.js'
import dbconnection from './src/config/dbconnection.js'
import express from 'express'
const app = express()

const port = process.env.PORT


// db connection
dbconnection()


// middlewares
app.use(express.json())



// routes
app.use('/user', userRouter)

// root document
app.get('/', (req,res)=>{
    res.send("Root Document!")
})


// listen 
app.listen(port)
console.log(port)