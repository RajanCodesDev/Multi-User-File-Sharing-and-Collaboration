import userModel from "../models/users.js"

const userexists = async (user) => {
    try {
        const exists = await userModel.findOne({
            $or: [{ username: user }, { email: user }]
        })
        return exists !== null
    } catch (err) {
        console.log(err)
    }
}

export default userexists