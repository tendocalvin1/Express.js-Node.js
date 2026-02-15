import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000

// This replaces manual JSON parsing
app.use(express.json())

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