const express = require('express');
const expHBS = require('express-handlebars');
const app = express();


// config
app.listen(3000, () => {
    console.log('The Web server - port 3000');
})
app.engine(
  "hbs",
  expHBS.engine({
    defaultLayout: "main",    
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

// _1
app
  .get("/exercise1", (req, res) => {
    res.send("Hello World");
  })

// _2
app
  .get("/exercise2", (req, res) => {
    res.render("home", {
      message: "Hello World",
      person: "Le Manh Thai",
    });
  })

// _3
app.use(express.static(__dirname +'/public/css'));
app
.get('/exercise3',(req,res) => {
    res.render('poem');
})
