const express=require("express");
const fs=require("fs");
const data=fs.readFileSync(__dirname+"/hello.txt","utf-8");
const app=express();
const validation=function(req,res,next)
{
    console.log("validation running");
    next();
}
const uservalidation=function(req,res,next)
{
    if(req.params.userid=="aman")
    {
        res.send("The user is validated as aman")
    }
    else{
        res.send("The user is validated not as aman and is some:"+req.params.userid)
    }
    next();
}
//app.use(validation); will have to use only for global purpose.
app.get("/",validation,(req,res)=>{
   res.send("Hello world");
})
app.get("/user/:userid?",uservalidation,(req,res)=>{
    res.send("HEllo users");// call it with http://localhost:3000/user
})
app.listen(3000);