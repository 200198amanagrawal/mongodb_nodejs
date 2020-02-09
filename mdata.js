var mongoose=require("mongoose");//general way to make a schema in mongoose or mongodb.
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});
var conn=mongoose.connection;
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
        return this.hourlyrate*this.totalhous;
}
var employeeModel=mongoose.model("Employee",employeeSchema);
var employees=new employeeModel({name:"Aman",email:"amanagrawal20998@gmail.com",
etype:"hourly",hourlyrate:10,totalhous:16,});
employees.total=employees.totalsalary();
conn.on("connected",function(){
    console.log("Connection successfully");
});
conn.on("disconnected",function(){
    console.log("Disconnection successfully");
});
conn.on("error",console.error.bind(console,"connection error:"));
conn.once("open",function(){
employees.save(function(err,res){
if(err) throw errors;
console.log(res);
conn.close();
});
});