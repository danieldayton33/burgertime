const mysql = require("mysql");

const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "DoubleDeasy1",
        database: "burgers_db"
      });

connection.connect(err=>{
    if (err) {
        console.error("error connecting +"+ err.stack);
        return;
    }
    console.log("connected as id:" + connection.threadId);
    // connection.query("insert into burgers (burger_name) values (\"Spicy Tuna Burger\")",(err, result)=>{
    //     if(err) throw err;
    //     console.log(result);
    // });
});

module.exports = connection;
