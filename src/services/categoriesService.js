const { Category } = require('../models');

const createCategory = async ({ name }) => {
    const category = await Category.findOne({ where: { name } });

    if (category) return false;

    const createdCategory = await Category.create({ name });

    const foundCategory = await Category.findOne({ where: { name: createdCategory.name } });

    return foundCategory;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();

    return categories;
};

module.exports = {
    createCategory,
    getAllCategories,
};