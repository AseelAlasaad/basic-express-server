'use strict';

const {server}=require('../src/server');
const supertest=require('supertest');
const mockReq=supertest(server);

describe('server testing',()=>{

    test('/person route, should response 200 if the name is in the query string', async ()=>{
     const res=await mockReq.get('/person?name=aseel');
     expect(res.status).toBe(200);
    });

    test('should response with 404 status on a bad route',async()=>{
        const res=await mockReq.get('/bad');
        expect(res.status).toBe(404);
       });
       
    test('should response with 404 status on a bad method',async()=>{
        const res=await mockReq.get('/bad()');
        expect(res.status).toBe(404);
       });


       test('should respond with 500 on an error', async () => {

        const response = await mockReq.get('/error');
        expect(response.status).toBe(500);
    
      });

      test('should respond with 500 on an error if no name in the query', async () => {

        const response = await mockReq.get('/person');
        expect(response.status).toBe(500);
    
      });



});