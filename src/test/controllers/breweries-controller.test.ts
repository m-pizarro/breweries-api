import request from 'supertest';
import { Server } from '../../server';
jest.useFakeTimers();

let token = '';
const app = new Server().app;

beforeAll((done) => {
    request(app)
        .post('/user/login')
        .send({
            username: 'admin',
            password: '123456',
        })
        .end((err, response) => {
            token = response.body.token;
            done();
        });
});

describe('GET /breweries', () => {
    // token not being sent - should respond with a 401
    test('It should require authorization', () => {
        return request(app)
            .get('/breweries')
            .then((response) => {
                expect(response.statusCode).toBe(401);
            });
    });
    // send the token - should respond with a 200
    test('It responds with JSON', () => {
        return request(app)
            .get('/breweries')
            .set('Authorization', `Bearer ${token}`)
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe('application/json');
            });
    });
});

