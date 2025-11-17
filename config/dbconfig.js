import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Load .env file
dotenv.config({ path: "./local.env" });


const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  connectionLimit: 200,
  keepAliveInitialDelay: 20000,
  enableKeepAlive: true,
});

// console.log('MySQL Config:', {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
// });

//module.exports = connection; common js export dont use it 
export default db