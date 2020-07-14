//bring in depencies/modules
const express = require("express");
const path = require("path");
//define express function
const app = express();
const PORT = 8000;

//configuring express app
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//configure EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//home route
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(PORT, () =>{
    console.log("server started at port ::: 8000");
});