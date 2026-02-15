import express from 'express';
import logger from './Middleware/logger.js';
import protect from './Middleware/route-level-middleware.js';
import protection from './Middleware/protection.js';

const app = express();
const PORT = process.env.PORT || 8000

// This replaces manual JSON parsing
app.use(express.json())
app.use(logger)

app.get('/', (req, res)=>{
    res.end("Welcome")
})

app.get('/jobs', (req,res)=>{
    const jobs = [
        {name: 'Tendo Calvin', occuaption: 'Software Engineer'},
        {name: 'Elon Musk', occupation: 'Software Engineer'}
    ]

    res.json(jobs)
})

app.get('/jobs', protect, (req, res)=>{
    res.json([{title: 'Footballer'}])
})


app.post('/jobs', (req, res)=>{
    console.log(req.body); // already parsed
    res.json({message: 'Job received'})
})


app.use((req, res)=>{
    res.status(404).send("Page not found")
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})