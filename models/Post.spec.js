const db = require('../data/dbConfig');
const server = require('../api/server');
const request = require('supertest');
const Post = require('../models/Post');

beforeEach(async () => {
    await db('posts').truncate();
});

describe('Post Model', () => {
    describe('get()', () => {
        it('returns all posts from database ', async () => {
            await Post.insert({ title: 'First post', description: 'first desc' });
            await Post.insert({ title: 'Second post', description: 'second desc' });

            let posts = await Post.get();
            expect(posts).toHaveLength(2);
        });
        it('returns an array when no arguments supplied', async () => {
            let posts = await Post.get();
            expect(posts).toBeInstanceOf(Array);
        });
        it('returns object when the object id is specified', async () => {
            const newPost = await Post.insert({ title: 'First post', description: 'first desc' });
            let posts = await Post.get(1);
            expect(posts).toHaveProperty('title');
        });
    });

    describe('add()', () => {
        it('creates a post', async () => {
            const postData = { title: 'Created post', description: 'third' };
            const newPost = await Post.insert(postData);
            expect(newPost.title).toEqual(postData.title);
        });
        it('returns an object', async () => {
            const postData = { title: 'Another post', description: 'fourth' };
            const newPost = await Post.insert(postData);
            expect(newPost).toHaveProperty('title');
        });
    });

    describe('remove()', () => {
        it('deletes a post', async () => {
            await Post.insert({ title: 'Another post', description: 'fourth' });
            const count = await Post.remove(1);
            expect(count).toBe(1);
        });
    });
});