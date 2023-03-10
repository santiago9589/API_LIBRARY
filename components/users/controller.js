const modelUser = require("./model")



const addUser = async(name,password) =>{
    try {
        const newUser = new modelUser({
            name,
            password
        })
        const response = await newUser.save()
        return response
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    addUser: addUser
}