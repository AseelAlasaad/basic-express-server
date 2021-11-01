'use strict';
const loggerMiddleware=require('../src/middleware/logger');
describe('logger middleware testing',()=>{
 
let consoleSpy;
let req={};
let res={};
let next=jest.fn();

beforeEach(()=>{
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
afterEach(()=>{
    consoleSpy.mockRestore();
  });
// test('if the same output',()=>{
//     loggerMiddleware(req,res,next);
//     expect(consoleSpy).toHaveBeenCalled();
// });
test('properly logs some output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });



  test('check if properly moved to the next middleware', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });



})