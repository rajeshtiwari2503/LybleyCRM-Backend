const { AdminModel, RegistrationModel, DealerModel } = require('../models/registration');

const adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AdminModel.findOne({ email, password });

        if (user) {
            // User found, send success response
            return res.status(200).json({ status: true, msg: "Login successful", user });
        } else {
            // User not found, send error response
            return res.status(401).json({ status: false, msg: "Incorrect username or password" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};

const adminRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await AdminModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new AdminModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};

module.exports = { adminLoginController, adminRegistration };
