const express = require("express")

const {addComplaint,getAllComplaint,getComplaintById,editComplaint,deleteComplaint}=require("../controllers/complaintController")

const router=express.Router()

router.post("/addComplaint",addComplaint)
router.get("/getAllComplaint",getAllComplaint)
router.get("/getComplaintById",getComplaintById)
router.patch("/editComplaint",editComplaint)
router.delete("/deleteComplaint",deleteComplaint)

module.exports=router