// | Route    | Method | Response                  |
// | -------- | ------ | ------------------------- |
// | `/`      | GET    | Welcome                   |
// | `/jobs`  | GET    | JSON array of 2 fake jobs |
// | `/jobs`  | POST   | “Job received”            |
// | anything | any    | 404                       |


import http from 'http';

const PORT = process.env.PORT || 8000

const server = http.createServer((req, res)=>{
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end('<h2>Welcome</h2>')
    }else if(req.url === '/jobs' && req.method === 'GET'){
        const jobs = [
    { name: 'Tendo Calvin', role: 'Software Engineer' },
    { name: 'David Beckham', role: 'Footballer' }
];
    res.writeHead(200, {'Content-type': 'application/json'})
    res.end(JSON.stringify(jobs));

        
    }else if (req.url === '/jobs' && req.method === 'POST'){
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify({message: "Job received"}))
    }else{
        res.writeHead(404, {'Content-type': 'text/html'})
        res.end('<h3>Page not found</h3>')
    }
})


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})