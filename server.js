var mysql = require("mysql");
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatbayDB"
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
// });

inquirer
  .prompt([
    {
    type: "rawlist",
    name: "userAction",
    message: "Do you want to post or bid?",
    choices: ["Post", "Bid"]
    }
 ])
 .then(function(action) {
   if (action.userAction === "Post") {
     inquirer.prompt([
      {
       type: "input",
       name: "items",
       message: "What item do you want to sell?"
       },
       {
       type: "input",
       name: "price",
       message: "What do you want the opening bid to be?"
       },
       {
       type: "input",
       name: "category",
       message: "What category does this item belong in?"
       }
     ]);
     // console.log("You want to sell your " +action.items+ " in the category of  " +action.category+ " for $" +action.price+ ".");
   }
   else if (action.userAction === "Bid") {
     console.log("You want to bid");
   }
 });



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
