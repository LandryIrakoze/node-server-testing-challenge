const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('GET / ', () => {
        it('returns 200 OK', () => {
            return (
                request(server)
                    .get('/')
                    .then(res => {
                        expect(res.status).toBe(200)
                    })
            )
        })
        it('returns JSON', done => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                    done();
                })
        })
    })
})