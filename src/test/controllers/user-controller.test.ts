import request from 'supertest';
import { Server } from '../../server';
jest.useFakeTimers();

const app = new Server().app;

beforeAll((done) => {
    request(app)
        .post('/user/login')
        .send({
            username: process.env.AUTH_USERNAME,
            password: process.env.AUTH_PASWORD,
        })
        .end((err, response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
});

describe('POST /user/login', () => {
    test('It should return a JWT token', async () => {
        await request(app)
            .post('/user/login')
            .send({
                username: 'admin',
                password: '123456',
            })
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.body.token).not.toBeNull();
            });
    });
});

