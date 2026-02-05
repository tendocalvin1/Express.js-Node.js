// 🔹 Example 1 — The Smallest Possible Server

import http from 'http'

const PORT = process.env.PORT || 8000

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'})
    res.end('<h2>Hello World</h2>')
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})