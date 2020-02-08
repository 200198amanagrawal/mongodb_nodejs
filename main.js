const express=require("express");
var bodyParser = require('body-parser')//defining the bodyparser
const { check, validationResult } = require('express-validator');
const { matchedData,sanitizeBody } = require('express-validator');
const urlencoder=bodyParser.urlencoded({extended:false});
const app=express();
var jsonParser = bodyParser.json();
app.use("/abc",express.static("public"));
app.use(urlencoder);//mandatory line
app.use(jsonParser);//mandatory line
app.set("view engine","twig");
app.set("views","./public/views");
app.get("/",(req,res)=>{
    res.render("index",{title:"Login page",message:"Hello world"});//simple twig program
 })
 app.post("/login",urlencoder,function(req,res){
    res.send("welcome"+req.body.name);
 })
app.post("/",urlencoder,[
    check("name","Username is invalid").isEmail(),//2nd arg is message for wrong validation and also we have to check inside this array every input that we are passing.
    check("password","Password must be more than 5").isLength({min:5}),
    check("cpassword").custom((value, { req })=>{
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
          }
          return true;
    })
]
,
(req,res)=>{
    const errors=validationResult(req);//error is tored here.
    console.log(errors.mapped());
    if(!errors.isEmpty())
    {
        const user=matchedData(req);
        res.render("index",{title:"Login's page",error:errors.mapped(),user:user});
    }
    else{
        const user=matchedData(req);
        console.log(user);
        res.render("form",{title:"User's page",user:user});
    }
});
app.listen(3000);