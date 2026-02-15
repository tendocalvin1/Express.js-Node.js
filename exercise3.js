// 🧪 Exercise 3 — Send Three Different Response Types
// Create:
// /text → plain text
// /json → JSON object
// /html → small HTML page
// You must use res.writeHead correctly.


import http from 'http';

const PORT = process.env.PORT

const server = http.createServer((req, res)=>{
    if(req.url === '/text'){
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end('This is plain text')
    } else if (req.url === '/json'){
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify({name: 'Tendo Calvin', goal:'Software Engineer'}))
    }else if(req.url === '/html'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end('<h2>This is HTML</h2>')
    } else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end('<h2>Page not found</h2>')
    }
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})