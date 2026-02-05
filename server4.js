// 🔹 Example 3 — Using Information from req

// Visit:

//  /
//  /about
//  /anything

// What this proves: req carries the URL and method from the client.

import http from 'http'

const PORT = process.env.PORT || 5000
const server = http.createServer((req, res)=>{
    res.end(`You requested: ${req.url} using ${req.method}`)
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})