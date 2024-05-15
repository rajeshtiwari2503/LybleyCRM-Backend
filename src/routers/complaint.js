const express = require("express")

const {addComplaint,getAllComplaint,getComplaintById,editComplaint,deleteComplaint}=require("../controllers/complaintController")

const router=express.Router()

router.post("/createComplaint",addComplaint)
router.get("/getAllComplaint",getAllComplaint)
router.get("/getComplaintById/:id",getComplaintById)
router.patch("/editComplaint/:id",editComplaint)
router.delete("/deleteComplaint/:id",deleteComplaint)

module.exports=router