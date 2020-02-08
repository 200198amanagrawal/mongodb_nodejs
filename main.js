const express=require("express");
const app=express();
app.set("view engine","twig");
app.set("views","./public/views");
app.get("/",(req,res)=>{
    res.render("index",{title:"Twig page",message:"Hello world"});
 })
app.listen(3000);