import express from 'express';
const app = express();

const protect = (req, res, next) =>{
    console.log('Checking auth...')
    next()
}


app.get('/jobs', protect, (req, res)=>{
    res.json([{name: 'Tendo', title:'Software Engineer'}])
})

export default protect;