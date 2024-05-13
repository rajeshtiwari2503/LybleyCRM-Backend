const express=require("express");
const router = express.Router();
const {adminLoginController,brandRegistration,serviceRegistration,empolyeeRegistration, adminRegistration,userRegistration,
  getAllBrand,getBrandById,editBrand,deleteBrand,getAllServiceCenter,getServiceCenterById,editServiceCenter,deleteServiceCenter,
getAllEmployee,getEmployeeById,editEmployee,deleteEmployee }=require("../controllers/registrationController")
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
router.post("/serviceRegistration", serviceRegistration
);
router.post("/empolyeeRegistration", empolyeeRegistration
);
router.post("/userRegistration", userRegistration
); 

router.post("/login",adminLoginController )
router.get("/getAllBrand",getAllBrand )
router.get("/getBrandBy/:id",getBrandById )
router.patch("/editBrand/:id",editBrand )
router.delete("/deleteBrand/:id",deleteBrand )
 
router.get("/getAllService",getAllServiceCenter )
router.get("/getServiceBy/:id",getServiceCenterById )
router.patch("/editService/:id",editServiceCenter )
router.delete("/deleteService/:id",deleteServiceCenter )

router.get("/getAllEmployee",getAllEmployee )
router.get("/getServiceBy/:id",getEmployeeById )
router.patch("/editService/:id",editEmployee )
router.delete("/deleteService/:id",deleteEmployee )


router.get("/getAllUser",getAllEmployee )
router.get("/getUserBy/:id",getEmployeeById )
router.patch("/editUser/:id",editEmployee )
router.delete("/deleteUser/:id",deleteEmployee )



// const AdminModel = require('./models/Admin');
// const BrandModel = require('./models/Brand');
// const UserModel = require('./models/User');

 
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