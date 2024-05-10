
const mongoose=require("mongoose")
 

const complaintNatureSchema=new mongoose.Schema({
  productName:{type:String,required:true},
  nature:{type:String,required:true},
})

const ComplaintNatureModal=mongoose.model("ComplaintNature",complaintNatureSchema)

module.exports=ComplaintNatureModal