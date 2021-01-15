// Set up MySQL connection.
<<<<<<< HEAD
var mysql = require("mysql");
var connection;
=======
const mysql = require("mysql");
const connection;
>>>>>>> c8e0dc411a924f8b0e0708e5887421240b132c04


// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "b06992jm",
//         database: "burgers_db"
//     });
// };

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "b06992jm",
        database: "recipe_db"
    });
};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;