const mysql = require('mysql'); //realizo la conexxión con bd
const util = require('util'); //para resolver las peticiones como promise

let pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || "test",
    connectionLimit: 10,
}) ;

pool.query = util.promisify(pool.query)
module.exports = pool;