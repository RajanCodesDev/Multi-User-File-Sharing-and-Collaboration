import mongoose from 'mongoose'
const userAuth = `${process.env.MONGO_URI}/${process.env.DB}`
// /${process.env.UserAuth}
const connectdb = async () => {
    try{
        await mongoose.connect(userAuth)
        console.log("Mongo is connected")
    }
    catch (err){
        console.log(err)
    }
}

export default connectdb