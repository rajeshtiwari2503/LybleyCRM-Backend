const mongoose =require("mongoose")

const sparePartSchema=new mongoose.Schema({
 
        sparepartName:{type:String,required:true},
        sparepartDescription:{type:String,required:true},
        sku:{type:String,required:true},
        price:{type:String },
        image:{type:String },
        adminId:{type:String },
        brandId:{type:String },
        brandName:{type:String },
        status:{type:String,default:"ACTIVE"}
  
  },{timestamps:true}
);

const SparePartModal=new mongoose.model("SpareParts",sparePartSchema);

module.exports=SparePartModal;