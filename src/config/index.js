module.exports = {
    port: process.env.PORT || 3000,
    schema: process.env.SCHEMA || "nobir",
    host: process.env.HOST || 'localhost',
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "password",
    secret: process.env.SECRET  || 'CodingIsCool'
}