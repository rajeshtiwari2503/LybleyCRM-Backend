const { AdminModel, BrandRegistrationModel,ServiceModel,EmployeeModel, DealerModel } = require('../models/registration');
 
 

const adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ status: false, msg: "Email and password are required" });
        }

        let user;
        let role;

        // Check each model sequentially until a user is found
        if (AdminModel) {
            user = await AdminModel.findOne({ email, password });
            if (user) {
                role = "ADMIN";
            }
        }

        if (!user && BrandRegistrationModel) {
            user = await BrandRegistrationModel.findOne({ email , password});
            if (user) {
                role = "BRAND";
            }
        }

        if (!user && EmployeeModel) {
            user = await EmployeeModel.findOne({ email , password});
            if (user) {
                role = "EMPLOYEE";
            }
        }

        if (!user && ServiceModel) {
            user = await ServiceModel.findOne({ email, password });
            if (user) {
                role = "SERVICE";
            }
        }

        if (!user) {
            return res.status(401).json({ status: false, msg: "Incorrect username or password" });
        }

        // Perform password validation (you may have this code elsewhere)
       
        // Successful login
        return res.status(200).json({ status: true, msg: `${role} login successful`, user });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
}



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
const brandRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await BrandRegistrationModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new BrandRegistrationModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
const serviceRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await ServiceModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new ServiceModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
const empolyeeRegistration = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await EmployeeModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: false, msg: "Email already registered" });
        }

        // Email does not exist, proceed with registration
        const newData = new EmployeeModel(req.body);
        await newData.save();
        return res.json({ status: true, msg: "Registration successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
};
const getAllBrand=async(req,res)=>{
    try{
      const data=await BrandRegistrationModel.find({});
      res.send(data);
    }catch(err){
      res.status(400).send(err);
    }
  }

module.exports = { adminLoginController,brandRegistration,serviceRegistration,empolyeeRegistration, adminRegistration,getAllBrand };
