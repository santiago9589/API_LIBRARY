const modelUser = require("./model")
const modelBook = require("../books/model")

const addUser = async (name, password) => {
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

const askBook = async (idUser, idBook) => {
    try {
        const foundUser = await modelUser.findOne({ _id: idUser })
        const foundBook = await modelBook.findOne({ _id: idBook })
        foundUser.books.push(idBook)
        foundBook.user = idUser
        const responseUser = await foundUser.save()
        const responseBook = await foundBook.save()
        return responseUser
    } catch (error) {
        throw new Error(error)
    }
}

const getUsers = async () => {
    try {
        const response = await modelUser.find().populate("books")
        return response
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    addUser: addUser,
    askBook: askBook,
    getUsers:getUsers
}