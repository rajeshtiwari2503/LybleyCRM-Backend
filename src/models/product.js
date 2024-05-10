const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
      productName:{type:String,required:true},
      productDescription:{type:String,required:true},
      productCategory:{type:String },
      categoryId:{type:String },
      sku:{type:String },
      applicableParts:{type:String },
      adminId:{type:String },
      brandId:{type:String },
      brandName:{type:String },
      status:{type:String,type:String,default:"ACTIVE"}

},{timestamps:true});

const ProductModel=new mongoose.model("Product",productSchema);
module.exports=ProductModel;