const Post = require('../models/Post');
const db = require('../data/dbConfig');
const request = require('supertest');
const server = require('../api/server');

beforeEach(async () => {
    await db('posts').truncate();
});

describe('Posts', () => {
    describe('[GET]: /api/posts', () => {

        it('[POST] / adds new post!', () => {
            return request(server)
                .post('/api/posts')
                .send({ title: 'Some title', description: 'test' })
                .expect('Content-Type', /json/)
                .then(res => {
                    expect(res.body.data.title).toEqual('Some title');
                });
        });

        it('[POST] / returns 201 Created!', () => {
            return request(server)
                .post('/api/posts')
                .send({ title: 'Some title', description: 'test' })
                .expect(201)
                .expect('Content-Type', /json/);
        });

        it('[DELETE] / deletes a post!', () => {
            return request(server)
                .delete(`/api/posts/1`)
                .expect(200)
                .expect('Content-Type', /json/)
                .then(res => {
                    expect(res.body.data).toBe(1);
                });
        });
    });

});

