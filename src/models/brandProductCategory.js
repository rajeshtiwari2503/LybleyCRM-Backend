const mongoose=require("mongoose");

const brandProductCategorySchema=new mongoose.Schema({
      categoryName:{type:String,required:true},
      status:{type:String,required:true}
},{timestamps:true});

const BrandProductCategoryModel=new mongoose.model("/brandProductCategory",brandProductCategorySchema);
module.exports=BrandProductCategoryModel;