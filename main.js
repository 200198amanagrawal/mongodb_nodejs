const express=require("express");
const app=express();
app.set("view engine","pug");
app.set("views","./public/views");
app.get("/",(req,res)=>{
    res.render("index",{title:"pug page",message:"Hello world"});
 })
app.listen(3000);