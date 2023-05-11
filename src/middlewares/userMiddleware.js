const schemas = require('./schema');

const checkUser = async (req, res, next) => {
    const { error } = schemas.userSchema.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    next();
};

module.exports = {
    checkUser,
};