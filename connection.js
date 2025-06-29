const mysql = require("mysql2");
var mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("Error in DB Connection: " + JSON.stringify(err, undefined, 2));
  } else {
    console.log("DB connected Successfully");
  }
});

module.exports = mysqlConnection;