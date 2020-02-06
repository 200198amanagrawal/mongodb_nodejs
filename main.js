const express=require("express");
const fs=require("fs");
const data=fs.readFileSync(__dirname+"/hello.txt","utf-8");
const app=express();
const validation=function(req,res,next)
{
    console.log("validation running");
    next();
}
app.use(validation);
app.get("/",(req,res)=>{
   res.send("Hello world");
})
app.get("/user",(req,res)=>{
    res.send("HEllo users");// call it with http://localhost:3000/user
})
app.listen(3000);