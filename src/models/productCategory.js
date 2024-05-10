const mongoose=require("mongoose");

const productCategorySchema=new mongoose.Schema({
      categoryName:{type:String,required:true},
      adminId:{type:String },
      brandId:{type:String },
      status:{type:String ,default:"ACTIVE"}

},{timestamps:true});

const ProductCategoryModel=new mongoose.model("ProductCategory",productCategorySchema);
module.exports=ProductCategoryModel;