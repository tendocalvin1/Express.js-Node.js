

import express from 'express';
const app = express();

const PORT = process.env.PORT || 8000

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})
