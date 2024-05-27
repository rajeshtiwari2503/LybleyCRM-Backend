const mongoose=require("mongoose")

const feedbackSchema=mongoose.Schema({
    ticketNumber: { type: String, required: true },
    customerName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    overallSatisfaction: { type: Number, required: true },
    serviceQuality: { type: Number, required: true },
    timeliness: { type: Number, required: true },
    professionalism: { type: Number, required: true },
    comments: { type: String, required: false },
    issuesFaced: { type: String, required: false },
    recommendationLikelihood: { type: Number, required: true },
    futureServiceInterest: { type: Number, required: true }
  },{timestamps:true})
  
  const FeedbackModal=new mongoose.model("Feedback",feedbackSchema);
  
  module.exports=FeedbackModal;