const mongoose=require("mongoose");

const registrationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:Number,required:true},
    password:{type:String,required:true},
    gstNo:{type:String},
    owner:{type:String},
    basePrice:{type:Number},
    category:{type:String},
    distanceLimitForBasePriceInKm:{type:Number},
    aboveBasePricePerKm:{type:Number},
    allowSerialNumberGeneration:{type:String},
    website:{type:String},
    landlineNo:{type:Number},
    addressLine1:{type:String},
    addressLine2:{type:String},
    landmark:{type:String},
    zipCode:{type:String},
    listOfArea:{type:String},
    locality:{type:String},
    city:{type:String},
    district:{type:String},
    state:{type:String},
    companyName:{type:String},
    panNumber:{type:String},
    agreementDate:{type:String},
    perMonthAmount:{type:Number},
    crm:{type:String},
    tollFree:{type:String},
    customerCare:{type:String},
    courierCharge:{type:Number},
    warehouseCharge:{type:String},
    designation:{type:String},
    url:{type:String},
    logo:{type:String},
    status:{type:String},
    role:{type:String,default:"BRAND"}
},{timestamps:true});

const RegistrationModel=new mongoose.model("registration",registrationSchema);

module.exports=RegistrationModel;