var mongoose=require("mongoose");
var employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalhous:Number,
})
var employeeModel=mongoose.model("Employee",employeeSchema);
var employees=new employeeModel({name:"Aman",email:"amanagrawal20998@gmail.com",
etype:"hourly",hourlyrate:10,totalhous:16,});
console.log(employees);