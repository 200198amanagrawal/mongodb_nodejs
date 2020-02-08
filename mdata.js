var mongoose=require("mongoose");//general way to make a schema in mongoose or mongodb.
var employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalhous:Number,
})
//to define method
employeeSchema.methods.totalsalary=function()
{
        console.log("employees working hour :"+this.hourlyrate*this.totalhous);
}
var employeeModel=mongoose.model("Employee",employeeSchema);
var employees=new employeeModel({name:"Aman",email:"amanagrawal20998@gmail.com",
etype:"hourly",hourlyrate:10,totalhous:16,});
console.log(employees);
employees.totalsalary();