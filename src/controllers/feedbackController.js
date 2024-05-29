const FeedbackModel = require("../models/feedback")

const addFeedback = async (req, res) => {

    try {
        let body = req.body;
        let data = new FeedbackModel(body);
        await data.save();
        res.json({ status: true, msg: "Feedback   Added" });
    } catch (err) {
        res.status(400).send(err);
    }

};

const getAllFeedback = async (req, res) => {
    try {
        let data = await FeedbackModel.find({}).sort({ _id: -1 });
        res.send(data);
    } catch (err) {
        res.status(400).send(err);
    }
}
const getFeedbackById = async (req, res) => {
    try {
        let _id = req.params.id;
        let data = await FeedbackModel.findById(_id);
        res.send(data);
    } catch (err) {
        res.status(400).send(err);
    }
}

const editFeedback = async (req, res) => {
    try {
        let _id = req.params.id;
        let body = req.body;
        let data = await FeedbackModel.findByIdAndUpdate(_id, body);
        res.json({ status: true, msg: "Feedback Updated" });
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteFeedback = async (req, res) => {
    try {
        let _id = req.params.id;
        let data = await FeedbackModel.findByIdAndDelete(_id);
        res.json({ status: true, msg: "Feedback Deteled" });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { addFeedback, getAllFeedback, getFeedbackById, editFeedback, deleteFeedback };
