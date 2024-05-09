
const mongoose=require("mongoose")
const { type } = require("os")

const complaintNature=new mongoose.Schema({
  productName:{type:String,required:true},
  nature:{type:String,required:true},
})

const ComplaintNatureModal=mongoose.Model("ComplaintNature",complaintNature)

exports.module=ComplaintNatureModal