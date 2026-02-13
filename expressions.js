// Example 3 — Using Information from req

import http from 'http'

const PORT = process.env.PORT || 8000

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.end("<h3>Full stack developer</h3>")
})


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})