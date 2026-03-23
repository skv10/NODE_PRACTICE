const config = require("../config/config");

const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== config.secretKey) {
        return res.status(403).json({ message: 'Unauthorised Access' });
    }
    next();
};

module.exports = { validateApiKey };
