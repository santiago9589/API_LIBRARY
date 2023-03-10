const succes = (req, res, message, status) => {
    res.status(status || 200).send({
        error: "",
        body: message
    })
}

const fail = (req, res, message, status, details) => {
    console.error(`[error]  ${message} / ${details}`)
    res.status(status || 400).send({
        error: message,
        body: ""
    })
}

module.exports = {
    succes:succes,
    fail:fail
}