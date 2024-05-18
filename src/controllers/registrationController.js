
const otpGenerator=require("otp-generator")
const {smsSend}=require("../services/service")
const { AdminModel, BrandRegistrationModel,ServiceModel,EmployeeModel, DealerModel,UserModel } = require('../models/registration');
 
 

const adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ status: false, msg: "Email and password are required" });
        }

        let user;
        let role;

        // Check each model sequentially until a user is found
        if (AdminModel) {
            user = await AdminModel.findOne({ email, password });
            if (user) {
                role = "ADMIN";
            }
        }

        if (!user && BrandRegistrationModel) {
            user = await BrandRegistrationModel.findOne({ email , password});
            if (user) {
                role = "BRAND";
            }
        }

        if (!user && EmployeeModel) {
            user = await EmployeeModel.findOne({ email , password});
            if (user) {
                role = "EMPLOYEE";
            }
        }

        if (!user && ServiceModel) {
            user = await ServiceModel.findOne({ email, password });
            if (user) {
                role = "SERVICE";
            }
        }

        if (!user) {
            return res.status(401).json({ status: false, msg: "Incorrect username or password" });
        }

        // Perform password validation (you may have this code elsewhere)
       
        // Successful login
        return res.status(200).json({ status: true, msg: `${role} login successful`, user });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
}

const adminRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await AdminModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new AdminModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
const brandRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await BrandRegistrationModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new BrandRegistrationModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
const serviceRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await ServiceModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new ServiceModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
const empolyeeRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await EmployeeModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new EmployeeModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
const dealerRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await DealerModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new DealerModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
const getAllBrand=async(req,res)=>{
    try{
      const data=await BrandRegistrationModel.find({});
      res.send(data);
    }catch(err){
      res.status(400).send(err);
    }
  }
  const userRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

    
        const newData = new UserModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
  const getBrandById=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await BrandRegistrationModel.findById(_id);
        res.send(data);
     }catch(err){
        res.status(400).send(err);
     }
}

const editBrand=async (req,res)=>{
    try{
        let _id=req.params.id;
        let body=req.body;
        let data=await BrandRegistrationModel.findByIdAndUpdate(_id,body);
        res.json({status:true,msg:"Brand Updated"});
     }catch(err){
        res.status(500).send(err);
     }
}
 const deleteBrand=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await BrandRegistrationModel.findByIdAndDelete(_id);
        res.json({status:true,msg:"Brand Deteled"});
     }catch(err){
        res.status(500).send(err);
     }
 }
  const getAllServiceCenter=async(req,res)=>{
    try{
      const data=await ServiceModel.find({});
      res.send(data);
    }catch(err){
      res.status(400).send(err);
    }
  }
  const getServiceCenterById=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await ServiceModel.findById(_id);
        res.send(data);
     }catch(err){
        res.status(400).send(err);
     }
}

const editServiceCenter=async (req,res)=>{
    try{
        let _id=req.params.id;
        let body=req.body;
        let data=await ServiceModel.findByIdAndUpdate(_id,body);
        res.json({status:true,msg:"ServiceCenter Updated"});
     }catch(err){
        res.status(500).send(err);
     }
}
 const deleteServiceCenter=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await ServiceModel.findByIdAndDelete(_id);
        res.json({status:true,msg:"ServiceCenter Deteled"});
     }catch(err){
        res.status(500).send(err);
     }
 }
  const getAllEmployee=async(req,res)=>{
    try{
      const data=await EmployeeModel.find({});
      res.send(data);
    }catch(err){
      res.status(400).send(err);
    }
  }
  const getEmployeeById=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await EmployeeModel.findById(_id);
        res.send(data);
     }catch(err){
        res.status(400).send(err);
     }
}

const editEmployee=async (req,res)=>{
    try{
        let _id=req.params.id;
        let body=req.body;
        let data=await EmployeeModel.findByIdAndUpdate(_id,body);
        res.json({status:true,msg:"Employee Updated"});
     }catch(err){
        res.status(500).send(err);
     }
}
 const deleteEmployee=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await EmployeeModel.findByIdAndDelete(_id);
        res.json({status:true,msg:"Employee Deteled"});
     }catch(err){
        res.status(500).send(err);
     }
 }

 const getAllUser=async(req,res)=>{
    try{
      const data=await UserModel.find({});
      res.send(data);
    }catch(err){
      res.status(400).send(err);
    }
  }
  const getUserById=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await UserModel.findById(_id);
        res.send(data);
     }catch(err){
        res.status(400).send(err);
     }
}

const editUser=async (req,res)=>{
    try{
        let _id=req.params.id;
        let body=req.body;
        let data=await UserModel.findByIdAndUpdate(_id,body);
        res.json({status:true,msg:"User Updated"});
     }catch(err){
        res.status(500).send(err);
     }
}
 const deleteUser=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await UserModel.findByIdAndDelete(_id);
        res.json({status:true,msg:"User Deteled"});
     }catch(err){
        res.status(500).send(err);
     }
 }
 const getAllDealer=async(req,res)=>{
    try{
      const data=await DealerModel.find({});
      res.send(data);
    }catch(err){
      res.status(400).send(err);
    }
  }
  const getDealerById=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await DealerModel.findById(_id);
        res.send(data);
     }catch(err){
        res.status(400).send(err);
     }
}

const editDealer=async (req,res)=>{
    try{
        let _id=req.params.id;
        let body=req.body;
        let data=await DealerModel.findByIdAndUpdate(_id,body);
        res.json({status:true,msg:"Dealer Updated"});
     }catch(err){
        res.status(500).send(err);
     }
}
 const deleteDealer=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await DealerModel.findByIdAndDelete(_id);
        res.json({status:true,msg:"Dealer Deteled"});
     }catch(err){
        res.status(500).send(err);
     }
 }
const otpSending=async (req, res) => {
    try {
        let body = req.body;
        let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        let user = await UserModel.findOneAndUpdate({ email: body.email }, { otp: otp });
        if (user) {
            smsSend(otp, user.contact);
            res.json({ status: true, msg: "OTP sent" });
        } else {
            res.json({ status: false, msg: "Something went wrong!" });
        }
    } catch (err) {
        res.status(400).send(err);
    }
  }

  const otpVerification= async (req, res) => {
    try {
        let body = req.body;
        let user = await UserModel.findOne({ email: body.email, otp: body.otp });
        if (user) {
            let user1 = await UserModel.findByIdAndUpdate({ _id: user._id } );
            res.json({ status: true, msg: "Verified" });
        } else {
            res.send({ status: false, msg: "Incorrect OTP" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
  }
  const forgetPassword=async (req, res) => {
    try {
        let body = req.body;
        let bool = true;
        let user = await UserModel.findOneAndUpdate({ email: body.email }, { password: body.password });
        if (user) {
            res.json({ status: true, msg: "Password changed successfully!" });
             sendMail(body.email,body.password,bool);
        } else {
            res.json({ status: false, msg: "Something went wrong!" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
  }
module.exports = { adminLoginController,brandRegistration,serviceRegistration,empolyeeRegistration,dealerRegistration, adminRegistration,userRegistration,
    getAllBrand,getBrandById,editBrand,deleteBrand,getAllServiceCenter,getServiceCenterById,editServiceCenter,deleteServiceCenter,
getAllEmployee,getEmployeeById,editEmployee,deleteEmployee ,getAllUser,getUserById,editUser,deleteUser
,getAllDealer,getDealerById,editDealer,deleteDealer,otpVerification,forgetPassword,otpSending};
