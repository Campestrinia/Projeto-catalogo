const jwt = require('jsonwebtoken')
const secretToken = "SenaiADS";

function createJWT(idUsuario) {
    const token = jwt.sign({ idUsuario }, secretToken, {
        expiresIn: '30d'
    });
    return token
}

function validateJWT(req, res, next) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        res.status(401).send({ error: 'Token não informado' })
    }

    const [aux, token] = authToken.split(" ")

    jwt.verify(token, secretToken, (err, decoded) => {
        if (err) {
            res.status(401).send({ error: 'Token inválido' })
        }
        req.idUsuario = decoded.idUsuario;

        next()
    })
}

module.exports = { createJWT, validateJWT }