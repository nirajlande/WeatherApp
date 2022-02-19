const express = require("express");
const app = express();
const path = require("path");
const port =  3000;
const page = path.join(__dirname,"../public");
const fs = require("fs");
var hbs = require('hbs');
const template_path = path.join(__dirname,"../template/views");
const partial_path = path.join(__dirname,"../template/partials");
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.use(express.static(page));

app.get("" , (req,res)=>{
     res.render("index.hbs");
})
app.get("/about",(req,res)=>{
    res.render("about.hbs");
})

app.get("/weather" , (req,res)=>{
    res.render("weather.hbs");
})
app.get("*" , (req,res)=>{
    res.render("error.hbs",{
        errorMsg:"OOPs!!! Page Not Found"
    });
})
app.listen(port,()=>{
    console.log(`${port}`);
})