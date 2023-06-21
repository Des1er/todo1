const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const items = ["day"];

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"))
app.get("/", function(req,res){
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { day: day, items: items });
});

app.post("/", function(req,res){
    var item =  req.body.addtodo;
    items.push(item);
    
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("port 3000");
})