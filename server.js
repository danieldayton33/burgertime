const express = require('express');
const PORT = process.env.PORT || 8081;

const app = express();
//serve static content for app from the "public" directory
app.use(express.static("public"));

//code to parse the app body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//import handlebars
const exphbs = require("express-handlebars");
//setup handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


const router = require("./controllers/burgers_controller");
app.use(router);

app.listen(PORT,(err)=>{
    console.log("Listening on http://localhost:" + PORT);
});