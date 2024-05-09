const mongoose =require("mongoose")

const sparePartSchema=new mongoose.Schema({
 
        sparepartName:{type:String,required:true},
        sparepartDescription:{type:String,required:true},
        sku:{type:String,required:true},
        price:{type:String,required:true},
        image:{type:String,required:true},
        adminId:{type:String,required:true},
        brandId:{type:String,required:true},
        brandName:{type:String,required:true},
        status:{type:String,type:String,default:"ACTIVE"}
  
  },{timestamps:true}
)

const SparePartModal=new mongoose.Model("SpareParts",sparePartSchema)

module.exports=SparePartModal;