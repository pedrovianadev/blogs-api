const schemas = require('./schema');

const checkPost = async (req, res, next) => {
    const { error } = schemas.postSchema.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    next();
};

module.exports = {
    checkPost,
};