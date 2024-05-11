const express = require("express")

const {addSparePart,getAllSparePart,getSparePartById,editSparePart,deleteSparePart}=require("../controllers/sparePartController")

const router=express.Router()

router.post("/addSparepart",addSparePart)
router.get("/getAllSparepart",getAllSparePart)
router.get("/getSparepartById/:id",getSparePartById)
router.patch("/editSparepart/:id",editSparePart)
router.delete("/deleteSparepart/:id",deleteSparePart)

module.exports=router