//  Example 4 — Controlling Headers with res
import http from 'http'
const PORT = process.env.PORT || 8000

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify({message: 'JSON response'}))
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})