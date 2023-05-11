const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
    const user = await User.findOne({ where: { email } });

    if (user) return false;

    const createdUser = await User.create({ displayName, email, password, image });

    const { id } = await User.findOne({ where: { email: createdUser.email } });

    return id;
};

const getAll = async () => {
    const user = await User.findAll({ attributes: { exclude: ['password'] } });

    return user;
};

const getById = async (id) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

    return user;
};

module.exports = {
    createUser,
    getAll,
    getById,
};