//🧱 The Mental Model

// When a POST request comes in:
// Client sends data → data arrives in chunks → Node emits "data" events → 
// Node emits "end" event → you parse JSON → send response

import http from 'http';

const PORT = process.env.PORT || 8000

const server = http.createServer((req, res)=>{
    if(req.url === '/jobs' && req.method === 'POST'){
        let body = '';

        // step 1 : Collect chunks
        req.on('data', (chunk)=>{
            body += chunk.toString();
        });

        // step 2 : When finished receiving
        req.on('end', ()=>{
            const parsedData = JSON.parse(body)

            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(JSON.stringify({message: 'Job received', data: parsedData}))
        })
    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.end('<h3>Pahe not found</h3>')
    }
})



server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
