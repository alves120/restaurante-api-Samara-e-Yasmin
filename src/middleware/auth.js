const jwt = require("jsonwebtoken")

function auth(req,res,next){
    const authHeaders.authorization

    if(!authHeader){
        return res.status(401).json({
            mensagem:"Token não informado"
        })
    }

    const token = authHearder.split(" ")[1]

    try {
        const decoded = jwt.verity(
            token,
            process.env.JWT_SECRET
        )

        req.usuario = decoded

        next()

    } catch (error) {
        console.log(error)

        return res.status(401).json({
            mensagem:"Token inválido"
        })
    }
}

module.exports = auth

