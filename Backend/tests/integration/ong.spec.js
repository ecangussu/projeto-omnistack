const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ON', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to create a new ON', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD",
            email: "apad@gmail.com",
            whatsapp: "16900000000",
            city: "Ribeirão Preto",
            uf: "SP"
        });

        //testar header: .set('Authorization', '<id existente>');

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});