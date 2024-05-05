const express=require("express");
const router=express.Router();
const BrandProductCategory=require("../models/brandProductCategory");

router.post("/addBrandProductCategory",async(req,res)=>{
    try{
        let body=req.body;
        let data=new BrandProductCategory(body);
        await data.save();
        res.json({status:true,msg:"Category Added"});
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports=router;