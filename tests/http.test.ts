import run from '../src';
import { Server } from 'http';
import request from 'supertest';

describe('http', () => {
    let server: Server;
    beforeAll(async () => {
        server = await run(3003);
    });
    it('GET /admin', () => {
        return request(server).get('/admin').expect(200);
    });
    afterAll(async () => {
        await server.close();
    });
});
