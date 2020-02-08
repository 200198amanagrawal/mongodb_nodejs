const express=require("express");
const app=express();
app.set("view engine","twig");
app.set("views","./public/views");
app.get("/",(req,res)=>{
    res.render("index",{title:"Twigrs page",message:"Hello world"});//simple twig program
 })
 app.get("/about/:a-:b",(req,res)=>{//using some calculation
     res.render("about",{title:"Calculation",sum:parseInt(req.params.a)+parseInt(req.params.b),sub:req.params.a-req.params.b,
    mul:req.params.a*req.params.b})
 })
app.listen(3000);