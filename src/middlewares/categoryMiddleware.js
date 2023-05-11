const schemas = require('./schema');

const checkCategory = async (req, res, next) => {
    const { error } = schemas.categorySchema.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    next();
};

module.exports = {
    checkCategory,
};