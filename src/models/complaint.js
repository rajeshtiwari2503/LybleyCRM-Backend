const mongoose=require("mongoose")
const { type } = require("os")

const complaintSchema=new mongoose.Schema({
//     complaintName:{type:String },
//     productCategory:{type:String },
//     categoryId:{type:String },
//     brand:{type:String },
//     brandId:{type:String },
//     adminId:{type:String },
//     productName:{type:String }
//     ,customerName:{type:String },
//     customerMobile:{type:String },
//     customerEmail:{type:String },
//     zipCode:{type:String },
//     address1:{type:String },
//     address2:{type:String },
//     listOfArea:{type:String },
//     state:{type:String },
//     district:{type:String },
//     city:{type:String },
//     locality:{type:String },
//     lacdmark:{type:String },
//     complaintNature:{type:String },
//     complaintDetails:{type:String },
//     complaintType:{type:String },
//     status:{type:String,default:"PENDIND"}
// },{timestamps:true})
categoryName: { type: String, required: true },
productBrand: { type: String, required: true },
modelNo: { type: String, required: true },
serialNo: { type: String, required: true },
purchaseDate: { type: Date, required: true },
warrantyStatus: { type: String  },
// images: { type: [String] }, 
issueType: { type: String, required: true },
detailedDescription: { type: String, required: true },
issueImages: { type: [String] }, // URLs or file paths to uploaded issue images
errorMessages: { type: String },
preferredServiceDate: { type: Date, required: true },
preferredServiceTime: { type: String, required: true },
serviceLocation: { type: String, required: true },
  fullName: { type: String },
  phoneNumber: { type: String },
  emailAddress: { type: String },
serviceAddress: { type: String, required: true },
status:{type:String,default:"PENDIND"}
}, { timestamps: true });

const ComplaintModal=new mongoose.model("Complaints",complaintSchema)


module.exports=ComplaintModal