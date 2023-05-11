const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const category = await categoriesService.createCategory({ name });

    if (!category) return res.status(409).json({ message: 'Category already registered' });

    return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
    const categories = await categoriesService.getAllCategories();

    return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getAllCategories,
};