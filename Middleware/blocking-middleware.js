// middleware is : A function that runs between the request and the response.


import express from 'express';

const app = express();

const PORT = process.env.PORT ||8000

app.use((req, res, next)=>{
    if(req.headers.authorization !== 'secret'){
        return res.status(401).send('Unauthorized')
    }

    next();
})