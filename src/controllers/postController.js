const { postService } = require('../services');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;

    const { id: userId } = req.user;

    try {
        const post = await postService.createPost({ title, content, userId, categoryIds });

        return res.status(201).json(post);
    } catch (error) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
};

module.exports = {
    createPost,
};