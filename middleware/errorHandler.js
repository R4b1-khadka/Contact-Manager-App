const {constants} = require("../constants")
const errorHandler= (err, req, res, next)=>{
    const statusCode = res.statusCode? res.statusCode : 500; 

    switch(statusCode){
        case constants.NOT_FOUND:
            res.json({ title: "not Found", message: err.message, stacktrace: err.stack})
            break;
        case constants.VALIDATION_ERROR:
            res.json({ title: "validation error ", message: err.message, stacktrace: err.stack})
            break;
        case constants.FORBIDDEN:
            res.json({ title: "forbidden ", message: err.message, stacktrace: err.stack})
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "the req is unauthorized ", message: err.message, stacktrace: err.stack})
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "the req is unauthorized ", message: err.message, stacktrace: err.stack})
            break;
        default:
            break;
    }
};

module.exports = errorHandler