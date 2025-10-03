import { configDotenv } from 'dotenv'
import express from 'express'
configDotenv()

// defining constants
const port = process.env.PORT
const app = express()

//route




app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.listen(port, ()=>{
    console.log(`App is running on ${port}`)
})

