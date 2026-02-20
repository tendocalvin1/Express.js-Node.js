import express from 'express';
import logger from './Middleware/logger.js';
// import protect from './Middleware/route-level-middleware.js';
// import protection from './Middleware/protection.js';
import  jobRoutes from './Routes/jobRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import postRoutes from './Routes/postRoutes.js';


const app = express();
const PORT = process.env.PORT || 8000

// This replaces manual JSON parsing
app.use(express.json())
app.use(logger)


// routes
app.use('/jobs', jobRoutes)
app.use('/users', userRoutes)
app.use('/posts', postRoutes)

app.get('/', (req, res)=>{
    res.end("Welcome")
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})