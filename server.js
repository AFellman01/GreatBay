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
      console.log("Welcome to Great Bay! ");
      readProducts1()
    });

    function readProducts1() {
      console.log("Selecting all products...\n");
      connection.query("SELECT * FROM items", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        createProduct()
      });
    }


    console.log("Would you like to post or bid?")


    function createProduct() {
      var query = connection.query(
        "INSERT INTO items SET ?",
        {
          item: "Live Wallaby",
          category:"Animal",
          price:"50",
        },
        function(err, res) {
          console.log(res.affectedRows + " product inserted!\n");
          readProducts2()
        }
      );

      // logs the actual query being run
      // console.log(query.sql);
    }
    //
    // function makeBid() {
    //   console.log("Updating all Rocky Road quantities...\n");
    //   var query = connection.query(
    //     "UPDATE products SET ? WHERE ?",
    //     [
    //       {
    //         price:
    //       },
    //       {
    //         item:
    //       }
    //     ],
    //     function(err, res) {
    //       console.log(res.affectedRows + " products updated!\n");
    //
    //     }
    //   );
    //
    //   // logs the actual query being run
    //   console.log(query.sql);
    // }


    function readProducts2() {
      console.log("Selecting all products...\n");
      connection.query("SELECT * FROM items", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });
    }
