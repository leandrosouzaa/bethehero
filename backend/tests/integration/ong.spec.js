const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'apad2',
      email: 'contato@gmail.com',
      whatsapp: '18997504705',
      city: 'Rio do Sul',
      uf: 'SP'
    });

    expect(response.body).toHaveProperty('id');


  })
})