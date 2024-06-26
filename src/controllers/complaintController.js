const ComplaintModal =require("../models/complaint")

const addComplaint  = async(req, res) => {
        try{
            let body=req.body;
            let data=new ComplaintModal(body);
            await data.save();
            res.json({status:true,msg:"Complaint   Added"});
        }catch(err){
            res.status(400).send(err);
        }
 
};

const getAllComplaint=async(req,res)=>{
    try{
        let data=await ComplaintModal.find({}).sort({ _id: -1 });
        res.send(data);
     }catch(err){
        res.status(400).send(err);
     }
}
const getComplaintById=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await ComplaintModal.findById(_id);
        res.send(data);
     }catch(err){
        res.status(400).send(err);
     }
}

const editComplaint=async (req,res)=>{
    try{
        let _id=req.params.id;
        let body=req.body;
        let data=await ComplaintModal.findByIdAndUpdate(_id,body);
        res.json({status:true,msg:"Complaint Updated"});
     }catch(err){
        res.status(500).send(err);
     }
}
 const deleteComplaint=async(req,res)=>{
    try{
        let _id=req.params.id;
        let data=await ComplaintModal.findByIdAndDelete(_id);
        res.json({status:true,msg:"Complaint Deteled"});
     }catch(err){
        res.status(500).send(err);
     }
 }

 const updateComplaint=async (req,res)=>{
   try{
       let _id=req.params.id;
       let body=req.body;
       let data=await ComplaintModal.findByIdAndUpdate(_id,body);
       res.json({status:true,msg:"Complaint Updated"});
    }catch(err){
       res.status(500).send(err);
    }
}

module.exports = { addComplaint,getAllComplaint,getComplaintById,editComplaint,deleteComplaint,updateComplaint };
