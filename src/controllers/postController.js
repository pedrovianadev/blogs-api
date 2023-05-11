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

const getAllByUserId = async (req, res) => {
    const { id: userId } = req.user;

    const posts = await postService.getAllByUserId(userId);

    return res.status(200).json(posts);
};

const getByIdUserId = async (req, res) => {
    const { id } = req.params; 

    const { id: userId } = req.user;

    const post = await postService.getByIdUserId(id, userId);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
};

const update = async (req, res) => {
    const { id } = req.params;

    const { id: userId } = req.user;

    const { title, content } = req.body;

    const auth = await postService.update({ id, title, content, userId });

    if (!auth) return res.status(401).json({ message: 'Unauthorized user' });

    const post = await postService.getByIdUserId(id, userId);

    return res.status(200).json(post);
};

module.exports = {
    createPost,
    getAllByUserId,
    getByIdUserId,
    update,
};