const express = require("express")

const {addSparePart,getAllSparePart,getSparePartById,editSparePart,deleteSparePart}=require("../controllers/sparePartController")

const router=express.Router()

router.post("/addSparepart",addSparePart)
router.get("/getAllSparepart",getAllSparePart)
router.get("/getSparepartById",getSparePartById)
router.patch("/editSparepart",editSparePart)
router.delete("/deleteSparepart",deleteSparePart)

exports.module=router