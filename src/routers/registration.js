const express=require("express");
const router = express.Router();
const RegistrationModel=require("../models/registration");

router.post("/registration",async(req,res)=>{
      try{
        const body=req.body;
        const newData=new RegistrationModel(body);
        await newData.save();
        res.send("Registration successful");
      }catch(err){
        res.status(500).send(err);
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

module.exports=router;