const modelUser = require("./model")
const modelBook = require("../books/model")

const addUser = async (email, password) => {
    try {

        if (!email || !password) {
            throw new Error("informacion incorrecta")
        }

        const userExist = await modelUser.findOne({ email })

        console.log(userExist)

        if (!!userExist) {
            throw new Error("usuario ya existe")
        }

        const newUser = new modelUser({
            email,
            password
        })
        const response = await newUser.save()
        return response
    } catch (error) {
        throw new Error(error)
    }
}

const deleteUser = async (id) => {
    try {

        if (!id) {
            throw new Error("informacion incorrecta")
        }

        const userSelected = await modelUser.findOne({ _id: id }).populate("books")

        
        console.log(userSelected.books[0]._id)

        if (userSelected.books[0]._id) {
            throw new Error("no se puede borrar. el usuario posee libros")
        }

        await modelUser.deleteOne({ _id: id })

        return "Usuario borrado con exito"
    } catch (error) {
        throw new Error(error)
    }
}

const askBook = async (idUser, idBook) => {
    try {
        if (!idUser || !idBook) {
            throw new Error("informacion incorrecta")
        }
        const foundUser = await modelUser.findOne({ _id: idUser })
        const foundBook = await modelBook.findOne({ _id: idBook })
        foundUser.books.push(idBook)
        foundBook.user = idUser

        if (foundBook.status) {
            throw new Error("libro no disponible")
        }

        foundBook.status = true
        const responseUser = await foundUser.save()
        await foundBook.save()
        return responseUser
    } catch (error) {
        throw new Error(error)
    }
}

const backBook = async (idUser, idBook) => {
    try {
        if (!idUser || !idBook) {
            throw new Error("informacion incorrecta")
        }
        const foundUser = await modelUser.findOne({ _id: idUser })
        const foundBook = await modelBook.findOne({ _id: idBook })
        const userFilter = foundUser.books.filter((id) => { id !== idBook })
        foundBook.user = null
        foundBook.status = false
        const responseUser = await userFilter.save()
        await foundBook.save()
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
    getUsers: getUsers,
    backBook: backBook,
    deleteUser: deleteUser
}

