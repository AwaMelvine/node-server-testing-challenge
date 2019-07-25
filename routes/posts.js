const { Router } = require('express');
const Post = require('../models/Post');

const router = new Router();

router.post('/', async (req, res) => {
    try {
        const post = await Post.insert(req.body);
        return res.status(201).json({ data: post });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const count = await Post.remove(id);
        return res.status(200).json({ data: count });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;