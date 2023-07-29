const express=require("express");
const router=express.Router();
const BrandProduct=require("../models/brandProduct");

router.post("/addBrandProduct",async(req,res)=>{
    try{
        let body=req.body;
        let data=new BrandProduct(body);
        await data.save();
        res.json({status:true,msg:"Product Added"});
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports=router;