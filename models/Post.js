const db = require('../data/dbConfig');

module.exports = {
    async get(id = null) {
        if (id) {
            const post = await db('posts').where({ id }).first();
            return post;
        }
        const posts = await db('posts');
        return new Array(...posts);
    },

    async insert(post) {
        const [id] = await db('posts').insert(post);
        return this.get(id);
    },

    async remove(id) {
        const count = await db('posts').where('id', id).del();
        return count;
    }
}