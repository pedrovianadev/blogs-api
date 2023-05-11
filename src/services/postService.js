const Sequelize = require('sequelize');

const { BlogPost, PostCategory } = require('../models');

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

module.exports = {
    createPost,
};