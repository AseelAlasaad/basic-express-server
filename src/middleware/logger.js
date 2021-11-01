'use strict';

// function logger(req,res,next){
//     if(req.method==='GET'){
//         console.log('REQUEST:',req.method,req.path);
//         next();
//     }
//     else{
//         next('The req is not a get request');
//     }
// }




function logger(req,res,next){
    console.log('REQUEST',req.method,req.path);
    next();
}

module.exports= logger;
