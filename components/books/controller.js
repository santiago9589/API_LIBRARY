const modelBook = require("./model")


const getBooks = async() =>{
    try {
        const response = await modelBook.find()
        return response
    } catch (error) {
        throw new Error(error)
    }
}

const addBook = async(name,gender) =>{
    try {
      //
    } catch (error) {
        throw new Error(error)
    }
}

const updateBook = async(id) =>{
    try {
      //
    } catch (error) {
        throw new Error(error)
    }
}

const deleteBook = async(id) =>{
    try {
      //
    } catch (error) {
        throw new Error(error)
    }
}

const getBook = async(id) =>{
    try {
      //
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getBooks : getBooks
}