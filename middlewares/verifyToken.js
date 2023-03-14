const jsonWebToken = require("jsonwebtoken")
const modelAdmin = require("../components/admin/model")


const verifyToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ error: "No autorizado" });
          }
    
          const authHeader = req.headers.authorization;
          const token = authHeader.split(" ")[1];


        if (!token) {
            return res.status(401).json({ error: "Token invalido" });
        }

        const validationToken = jsonWebToken.verify(token, process.env.SECRET_KEY)

        if (!validationToken) {
            return res.status(401).json({ error: "Token equivocado" });
        }

        next()

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = verifyToken