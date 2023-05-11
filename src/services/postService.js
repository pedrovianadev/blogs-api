const Sequelize = require('sequelize');

const { BlogPost, PostCategory, User, Category } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV;

const sequelize = new Sequelize(config[env]);

const createPost = async ({ title, content, userId, categoryIds }) => {
    const t = await sequelize.transaction();

    try {
        const post = await BlogPost.create({ title, content, userId }, { transaction: t });

        const createPostCategory = categoryIds.map((categoryId) => 
            PostCategory.create({ postId: post.id, categoryId }, { transaction: t }));

        await Promise.all(createPostCategory);

        await t.commit();

        const findPost = await BlogPost.findOne({ where: { id: post.id } });

        return findPost;
    } catch (error) {
        await t.rollback();

        throw error;
    }
};

const getAllByUserId = async (userId) => {
    const posts = await BlogPost.findAll({
        where: { userId },
        include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    });

    return posts;
};

const getByIdUserId = async (id, userId) => {
    const [post] = await BlogPost.findAll({
        where: { userId },
        include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] }, where: { id } },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    });

    return post;
};

const update = async ({ id, title, content, userId }) => {
    const post = await getByIdUserId(id, userId);

    if (!post) return false;

    await BlogPost.update({ title, content }, { where: { id } });

    return true;
};

module.exports = {
    createPost,
    getAllByUserId,
    getByIdUserId,
    update,
};