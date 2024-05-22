const { stack } = require("../routes/productRoute");

const errorMiddleware = (err, req, res, next) => {
    console.log(`here is an error Middleware`);
    const statusCode = res.statusCode ? res.statusCode : 500; // default statusCode to 500 if!
    res.json({message:err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null}); // show no stack if not dev
}

module.exports = errorMiddleware;