var mysql = require("mysql");
var enquirer = require("enquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bay_itemsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome to Great Bay " + connection.threadId + "\n");

});

console.log("Would you like to post?")
