'use strict';

const { server } = require('../src/server.js'); 
const superTest = require('supertest');
const request = superTest(server);

let id;

describe('===============CLOTHES API TEST===============', () => {

  it('should be able to create a cloth on POST /clothes', async () => {
    const response = await request.post('/api/v2/clothes').send({
      item: 'pants',
      type: 'jeans',
    });
    expect(response.status).toEqual(201);
    expect(response.body.data.item).toEqual('pants');
    expect(response.body.data.type).toEqual('jeans');
    id = response.body.id;
  });

  it('should be able to update a cloth on PUT /clothes', async () => {
    const response = await request.put(`/api/v2/clothes/${id}`).send({
      item: 'test',
      type: 'test2',
    });
    expect(response.status).toEqual(200);
    expect(response.body.data.item).toEqual('test');
    expect(response.body.data.type).toEqual('test2');
  });

  it('should be able to get a cloth on GET /clothes/:id', async () => {
    const response = await request.get(`/api/v2/clothes/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.data.item).toEqual('test');
  });

  it('should be able to get a cloth on DELETE /clothes/:id', async () => {
    const response = await request.delete(`/api/v2/clothes/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.data).toEqual(undefined);
  });
});

describe('===============FOODS API TEST===============', () => {

    it('should be able to create a food on POST /clothes', async () => {
      const response = await request.post('/api/v2/foods').send({
        name: 'whatever',
        quantity: 'whatever extra',
      });
      expect(response.status).toEqual(201);
      expect(response.body.data.name).toEqual('whatever');
      expect(response.body.data.quantity).toEqual('whatever extra');
      id = response.body.id;
    });
  
    it('should be able to update a food on PUT /foods', async () => {
      const response = await request.put(`/api/v2/foods/${id}`).send({
        name: 'test',
        quantity: 'test2',
      });
      expect(response.status).toEqual(200);
      expect(response.body.data.name).toEqual('test');
      expect(response.body.data.quantity).toEqual('test2');
    });
  
    it('should be able to get a food on GET /foods/:id', async () => {
      const response = await request.get(`/api/v2/foods/${id}`);
      expect(response.status).toEqual(200);
      expect(response.body.data.name).toEqual('test');
    });
  
    it('should be able to get a food on DELETE /foods/:id', async () => {
      const response = await request.delete(`/api/v2/foods/${id}`);
      expect(response.status).toEqual(200);
      expect(response.body.data).toEqual(undefined);
    });
  });