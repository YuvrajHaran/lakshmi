const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Yuvraj@123',
    database : 'user_responses'
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;

