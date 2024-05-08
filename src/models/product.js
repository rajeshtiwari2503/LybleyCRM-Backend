const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
      productName:{type:String,required:true},
      productDescription:{type:String,required:true},
      productCategory:{type:String,required:true},
      categoryId:{type:String,required:true},
      sku:{type:String,required:true},
      applicableParts:{type:String,required:true},
      adminId:{type:String,required:true},
      brandId:{type:String,required:true},
      status:{type:String,type:String,default:"ACTIVE"}

},{timestamps:true});

const ProductModel=new mongoose.model("Product",productSchema);
module.exports=ProductModel;