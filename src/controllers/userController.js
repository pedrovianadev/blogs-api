const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { userService } = require('../services');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const id = await userService.createUser({ displayName, email, password, image });

    if (!id) return res.status(409).json({ message: 'User already registered' });

    const token = jwt.sign({ id }, JWT_SECRET, {});

    return res.status(201).json({ token });
};

const getAll = async (req, res) => {
    const user = await userService.getAll();

    return res.status(200).json(user);
};

const getById = async (req, res) => {
    const { id } = req.params;

    const user = await userService.getById(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
};

module.exports = {
    createUser,
    getAll,
    getById,
};