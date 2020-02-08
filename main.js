const express=require("express");
const app=express();
app.set("view engine","ejs");
app.set("views","./public/views");
app.get("/",(req,res)=>{
    res.render("index1",{title:"EJS page",message:"Hello world"});
 })
app.listen(3000);