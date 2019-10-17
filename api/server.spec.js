const request = require('supertest');
const server = require ('./server');

describe('GET /', () => {
    // Should return http 200
    it('should return 200', () => {
        return request(server).get('/').then(res => { // must return request to prevent false positive
            expect(res.status).toBe(200)
        })
    })

    // Should return response in JSON
    test('should return JSON', async () => {
        const response = await request(server).get('/');
        expect(response.type).toMatch(/json/i) // toMatch uses a regular expression, i means case insensitive
    })

    // Should return object with API value 'Up'

})