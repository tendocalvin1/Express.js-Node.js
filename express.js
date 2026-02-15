// | Route    | Method | Response    |
// | -------- | ------ | ----------- |
// | `/`      | GET    | Welcome     |
// | `/jobs`  | GET    | 2 fake jobs |
// | `/jobs`  | POST   | Echo body   |
// | anything | any    | 404         |


import express from 'express';

const app = express();
const PORT = process.env.PORT  || 8000

// Replaces manual JSON parsing
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Welcome')
})


app.get('/jobs', (req, res)=>{
    const occupations = [
        {id:1, name: 'Ruben Amorim', work:'Football manager'},
        {id:2, name: 'Thomas Frank', work:'Football manager'},
        {id:3, name: 'Robbie Lyle', work:'AFTV and DR Sports'}
    ]

    res.json(occupations)
})

app.post('/jobs', (req, res)=>{
    console.log(req.body)
})

app.use((req, res)=>{
    res.status(404).send('Page not found')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})