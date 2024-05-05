const express=require("express");
const router = express.Router();
const {adminLoginController,brandRegistration,adminRegistration,getAllBrand}=require("../controllers/registrationController")
const RegistrationModel=require("../models/registration");

// router.post("/registration",async(req,res)=>{
//       try{
//         const body=req.body;
//         const newData=new RegistrationModel(body);
//         await newData.save();
//         res.json({status:true,msg:"Registration successful"});
//       }catch(err){
//         res.status(500).send(err);
//       }
// });
router.post("/registration", adminRegistration
);

router.post("/brandRegistration", brandRegistration
);

// router.post("/login",async(req,res)=>{
//      try{
//       const {email,password}=req.body;
//       const user=await RegistrationModel.findOne({email:email,password:password});
//       if(user){
//         res.send(user ,{ status: true, msg: "Registration successful" });
//       }else{
//         res.status(401).json({status: true, msg: "Incorrect username and password"} );
//       }
//      }catch(err){
//       res.status(400).send(err);
//      }
// });

router.post("/login",adminLoginController )




// const AdminModel = require('./models/Admin');
// const BrandModel = require('./models/Brand');
// const UserModel = require('./models/User');

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password, role } = req.body;
//     let user;

     
//     switch (role) {
//       case "admin":
//         user = await AdminModel.findOne({ email, password });
//         break;
//       case "brand":
//         user = await BrandModel.findOne({ email, password });
//         break;
//       case "user":
//         user = await UserModel.findOne({ email, password });
//         break;
//       default:
//         return res.status(400).json({ status: false, msg: "Invalid role" });
//     }

//     if (!user) {
//       return res.status(401).json({ status: false, msg: "Incorrect username or password" });
//     }

    
//     switch (role) {
//       case "admin":
        
//         return res.status(200).json({ status: true, msg: "Admin login successful", user });
//       case "brand":
        
//         return res.status(200).json({ status: true, msg: "Brand login successful", user });
//       case "user":
      
//         return res.status(200).json({ status: true, msg: "User login successful", user });
//       default:
//         return res.status(400).json({ status: false, msg: "Invalid role" });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send(err);
//   }
// });
router.get("/getAllBrand",getAllBrand);

router.get("/getAllUser",async(req,res)=>{
    try{
      const data=await RegistrationModel.find({});
      res.send(data);
    }catch(err){
      res.status(400).send(err);
    }
});

router.get("/getUserBy/:id",async(req,res)=>{
    try{
      let _id=req.params.id; 
      const data=await RegistrationModel.findById(_id);
      res.send(data);
    }catch(err){
      res.status(400).send(err);
    }
});

router.patch("/editBrandBy/:id",async(req,res)=>{
  try{
    const body=req.body;
    let _id=req.params.id; 
    const data=await RegistrationModel.findByIdAndUpdate(_id,body);
    res.json({status:true,msg:"Updated"});
  }catch(err){
    res.status(500).send(err);
  }
});

 
router.delete("/deleteBrandBy/:id",async(req,res)=>{
  try{
    let _id=req.params.id; 
    const data=await RegistrationModel.findByIdAndDelete(_id);
    res.json({status:true,msg:"Delete"});
  }catch(err){
    res.status(500).send(err);
  }
});

 
module.exports=router;