const mongoose=require("mongoose")
const { type } = require("os")

const complaintSchema=new mongoose.Schema({
    complaintName:{type:String,required:true},
    productCategory:{type:String,required:true},
    categoryId:{type:String },
    brand:{type:String },
    brandId:{type:String },
    adminId:{type:String },
    productName:{type:String }
    ,customerName:{type:String },
    customerMobile:{type:String },
    customerEmail:{type:String },
    zipCode:{type:String },
    address1:{type:String },
    address2:{type:String },
    listOfArea:{type:String },
    state:{type:String },
    district:{type:String },
    city:{type:String },
    locality:{type:String },
    lacdmark:{type:String },
    complaintNature:{type:String },
    complaintDetails:{type:String },
    complaintType:{type:String },
    status:{type:String,default:"PENDIND"}
},{timestamps:true})

const ComplaintModal=new mongoose.model("Complaints",complaintSchema)


module.exports=ComplaintModal