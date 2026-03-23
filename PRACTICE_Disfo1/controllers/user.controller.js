const UserModel = require('../models/user.model');
const { registerUserSchema } = require('../validations/user.validator');

const registerUser = async (req, res) => {
    try {
        const { error, value } = registerUserSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const newUser = UserModel({
            fullName: value.fullName,
            username: value.username,
            email: value.email,
        });

        const response = await newUser.save();
        return res.status(200).json({
            message: 'New user created',
            data: response,
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Failed to create new user', reason: 'Already Exists in DB' });
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { registerUser };
