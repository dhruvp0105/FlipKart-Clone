const User = require("../model/userSchema");

const userSignup = async (req, res) => {
    try {
        const user = req.body;

        const exist = await User.findOne({ uname: user.uname });
        if (exist) {
            res.status(401).json({ message: "User already exist" })
        }
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({ message: user })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const userLogin = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (user) {
            return res.status(200).json({ data: user })
        }
        else {
            return res.status(401).json("Invalid Login")
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { userSignup, userLogin };