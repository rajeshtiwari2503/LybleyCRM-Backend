const mongoose = require("mongoose");


const adminRegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "ADMIN" },
},
    { timestamps: true });

const bradRegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "BRAND" },
    gstNo: { type: String },
    owner: { type: String },
    basePrice: { type: Number },
    category: { type: String },
    distanceLimitForBasePriceInKm: { type: Number },
    aboveBasePricePerKm: { type: Number },
    allowSerialNumberGeneration: { type: String },
    website: { type: String },
    landlineNo: { type: Number },
    addressLine1: { type: String },
    addressLine2: { type: String },
    landmark: { type: String },
    zipCode: { type: String },
    listOfArea: { type: String },
    locality: { type: String },
    city: { type: String },
    district: { type: String },
    state: { type: String },
    companyName: { type: String },
    panNumber: { type: String },
    agreementDate: { type: String },
    perMonthAmount: { type: Number },
    crm: { type: String },
    tollFree: { type: String },
    customerCare: { type: String },
    courierCharge: { type: Number },
    warehouseCharge: { type: String },
    designation: { type: String },
    url: { type: String },
    logo: { type: String },
    status: { type: String },
}, { timestamps: true });


const serviceCenterRegistrationSchema = new mongoose.Schema({
    firmName: { type: String },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "SERVICE" },
    bankName: { type: String },
    branchName: { type: String },
    accountNo: { type: String },
    ifscCode: { type: String },
    appointmentDate: { type: String },
    renewalDate: { type: String },
    securityDeposit: { type: String },
    transferDetails: { type: String },
    transferDate: { type: String },
    gstNo: { type: String },
    productCategory: { type: String },
   coveragePinCode:{ type: String },
   coverageArea:{ type: String },
    website: { type: String },
    landlineNo: { type: Number },
    addressLine1: { type: String },
    addressLine2: { type: String },
    landmark: { type: String },
    pinCode: { type: String },
    listOfArea: { type: String },
    locality: { type: String },
    city: { type: String },
    district: { type: String },
    state: { type: String },
    panNumber: { type: String },
    url: { type: String },
    logo: { type: String },
    status: { type: String , default: "ACTIVE"},
}, { timestamps: true });

const employeeRegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "EMPLOYEE" }
},
    { timestamps: true });
const dealerRegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "DEALER" }
},
    { timestamps: true });

const userRegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "USER" }
    ,otp:{type:Number}
},
    { timestamps: true });

const BrandRegistrationModel = mongoose.model("BrandRegistration", bradRegistrationSchema);
const AdminModel = mongoose.model("AdminRegistration", adminRegistrationSchema);
const DealerModel = mongoose.model("DealerRegistration", dealerRegistrationSchema);
const ServiceModel = mongoose.model("ServiceRegistration", serviceCenterRegistrationSchema);
const EmployeeModel = mongoose.model("EmpolyeeRegistration", employeeRegistrationSchema);
const UserModel = mongoose.model("UserRegistration", userRegistrationSchema);

module.exports = {
    BrandRegistrationModel,
    AdminModel,
    ServiceModel,
    EmployeeModel,
    DealerModel,
    UserModel
};