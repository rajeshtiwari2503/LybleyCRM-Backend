const express = require("express")

const {addComplaintNature,getAllComplaintNature,getComplaintNatureById,editComplaintNature,deleteComplaintNature}=require("../controllers/complaintNatureController")

const router=express.Router()

router.post("/addComplaintNature",addComplaintNature)
router.get("/getAllComplaintNature",getAllComplaintNature)
router.get("/getComplaintNatureById",getComplaintNatureById)
router.patch("/editComplaintNature",editComplaintNature)
router.delete("/deleteComplaintNature",deleteComplaintNature)

module.exports=router;