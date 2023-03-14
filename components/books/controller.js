const modelBook = require("./model")



const getBooks = async () => {
    try {
        const response = await modelBook.find().populate("user", "name")
        return response
    } catch (error) {
        throw new Error(error)
    }
}

const addBook = async (name, gender) => {
    try {
        if (!name || !gender) {
            throw new Error("informacion incorrecta")
        }
        const newBook = new modelBook({
            name,
            gender,
            status: false
        })
        const response = await newBook.save()
        return response
    } catch (error) {
        throw new Error(error)
    }
}

const getBook = async (id) => {
    try {
        const bookSelected = await modelBook.findById(id).populate("user")
        return bookSelected
    } catch (error) {
        throw new Error(error)
    }

}

const updateBook = async (id, name, gender) => {
    try {
        if (!name || !gender || id) {
            throw new Error("informacion incorrecta")
        }
        const bookSelected = await modelBook.findOne({ _id: id })
        bookSelected.name = name
        bookSelected.gender = gender
        const bookUpdated = await bookSelected.save()
        return bookUpdated
    } catch (error) {
        throw new Error(error)
    }
}

const deleteBook = async (id) => {
    try {

        const bookSelected = await modelBook.findById(id)

        if (bookSelected.status) {
            throw new Error("existe usuario con este libro")
        }

        await modelBook.deleteOne({ _id: id })

        return "registro borrado con exito"
    } catch (error) {
        throw new Error(error)
    }
}

const deleteAllBooks = async () => {
    try {
        await modelBook.deleteMany({status:false})
        return "Registros borrados con exito"
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = {
    getBooks: getBooks,
    addBook: addBook,
    getBook: getBook,
    updateBook: updateBook,
    deleteBook: deleteBook,
    deleteAllBooks: deleteAllBooks
}



