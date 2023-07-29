const express=require("express");
const router = express.Router();
const RegistrationModel=require("../models/registration");

router.post("/registration",async(req,res)=>{
      try{
        const body=req.body;
        const newData=new RegistrationModel(body);
        await newData.save();
        res.json({status:true,msg:"Registration successful"});
      }catch(err){
        res.status(500).send(err);
      }
});

router.post("/lybleyCRMlogin",async(req,res)=>{
     try{
      const {email,password}=req.body;
      const user=await RegistrationModel.findOne({email:email,password:password});
      if(user){
        res.send(user);
      }else{
        res.status(401).send("Incorrect username and password");
      }
     }catch(err){
      res.status(400).send(err);
     }
});

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