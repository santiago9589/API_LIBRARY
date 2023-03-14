const modelAdmin = require("./model")
const bycript = require("bcrypt")
const jsonWebToken = require("jsonwebtoken")


const registerAdmin = async (email, password) => {
    try {

        if (!email || !password) {
            res.status(401).json({ error: "campos invalidos" });
        }

        const hashPassword = await bycript.hash(password, 10)

        const userEncripted = new modelAdmin({
            email,
            password: hashPassword
        })

        await userEncripted.save()

        return userEncripted

    } catch (error) {
        throw new Error(error)
    }
}

const loginAdmin = async (email, password) => {
    try {

        if (!email || !password) {
            res.status(401).json({ error: "campos invalidos" });
        }

        const userRegister = await modelAdmin.findOne({ email })

        if (!userRegister) {
            res.status(401).json({ error: "usuario no encontrado" });
        }

        const comparePassword = bycript.compare(userRegister.password,password)

        if (!comparePassword) {
            res.status(401).json({ error: "credenciales invalidas" });
        }
        
        const token = jsonWebToken.sign({email,password},process.env.SECRET_KEY)

        return token

    } catch (error) {
        throw new Error(error)
    }
}


module.exports = {
    registerAdmin: registerAdmin,
    loginAdmin: loginAdmin
}

