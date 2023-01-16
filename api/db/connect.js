const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 5
});

pool.getConnection((err, conn) => {
  if(err) {
    console.log("Something went wrong when connecting to DB: ", err.sqlMessage);
    return;
  }
  console.log("Connection established to the DB.");
  pool.releaseConnection(conn);
});

module.exports = pool.promise();