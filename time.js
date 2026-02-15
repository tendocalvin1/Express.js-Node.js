// 🧪 Exercise 1 — Prove the Server Runs Per Request
// Make the server print the current time in the terminal every time you refresh the browser.
// You must see a new time for every request.

import http from 'http'
const PORT = process.env.PORT

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    const now = new Date();
    console.log(now.toLocaleTimeString());
    res.end("Check your terminal")

})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})