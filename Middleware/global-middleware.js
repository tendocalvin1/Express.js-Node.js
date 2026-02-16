// Create a global middleware that logs:
// Method
// URL
// Current time


import express from 'express'

const app = express();
const PORT = process.env.PORT || 8000

// Global middleware
app.use((req, res, next)=>{
    console.log({
        method: req.method,
        url: req.url,
        time: new Date().toISOString
    })

    next();
});


app.get('/', (req, res)=>{
    res.end('Home')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})