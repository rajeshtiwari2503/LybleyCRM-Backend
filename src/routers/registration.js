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

module.exports=router;