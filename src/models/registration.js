const mongoose=require("mongoose");

const registrationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:Number,required:true},
    password:{type:String,required:true}
},{timestamps:true});

const RegistrationModel=new mongoose.model("registration",registrationSchema);

module.exports=RegistrationModel;