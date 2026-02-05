// 🔹 Example 2 — Seeing the Request Hit Your Server
import http from 'http'

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res)=>{
    console.log('request received!');
    res.end('Check your terminal')
})


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})