'use strict';

const express=require('express');
const app= express();
require('dotenv').config();

const PORT=process.env.PORT||3007;
const logger=require('./middleware/logger');
const querystring=require('./middleware/validator');
const notfound=require('./error-handlers/404');
const error500=require('./error-handlers/500');



app.get('/home',(req,res)=>{
    res.status(200).send('This is The Home 🥳');
})

app.get('/person',querystring,(req,res)=>{
    const nameValue=req.query.name;
    const obj={
        name:`${nameValue}`
    }
    res.status(200).json(obj);
})

app.get('/error',(req,res,next)=>{
    // next("you made error")
    throw new Error('You made an error');
})

app.use('*',notfound);
app.use(logger);
app.use(error500);


function start(){
    app.listen(PORT,()=>{
        console.log(`Server started on ${PORT}`);
    });
}

module.exports={
  server:app,
  start
};

