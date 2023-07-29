const mongoose=require("mongoose");

const brandProductSchema=new mongoose.Schema({
      productName:{type:String},
},{timestamps:true});

const BrandProductModel=new mongoose.model("/brandProduct");
module.exports=BrandProductModel;