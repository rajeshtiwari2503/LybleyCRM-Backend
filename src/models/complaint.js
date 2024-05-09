const mongoose=require("mongoose")

const complaintSchema=new mongoose.Schema({
    complaintName:{type:String,required:true},
    productName:{type:String,required:true},
    complaintName:{type:String,required:true},
    complaintName:{type:String,required:true},
    complaintName:{type:String,required:true},
})

const ComplaintModal=mongoose.Model("Complaints",complaintSchema)


exports.module=ComplaintModal