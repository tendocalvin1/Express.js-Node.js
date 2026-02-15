// 🧪 Exercise 4 — Show Request Details to the Browser
// Return a JSON response showing:
// method
// url
// headers
// You must use JSON.stringify.

import http from 'http';

const PORT = process.env.PORT

const server = http.createServer((req, res)=>{
     res.writeHead(200, {'content-type':'application/json'})
     res.end(JSON.stringify({message: "JSON response"}))
})

server.listen(PORT, ()=>{
     console.log(`Server is running on port ${PORT}`)
})

// I am not sure of how to attempt this, please. Remember my goal is to become a full-stack developer working
// remotely, so please help.