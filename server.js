// HTTP Module & create server.

import http from 'http';
const PORT = process.env.PORT;
const server = http.createServer((req, res)=>{
    try{
        // check if GET request
        if(req.method === 'GET'){
    if(req.url === '/'){
res.writeHead(200, {'content-type': 'text/html'})
// res.end(JSON.stringify({message: "Internal Server Error"}))
res.end('<h1>Home Page</h1>')
    }else if(req.url === '/about'){
res.writeHead(200, {'content-type': 'text/html'})
res.end('<h1>About Page</h1>')
}else{
    res.writeHead(404, {'content-type': 'text/html'})
    res.end('<h1>Not Found</h1>')
}


        }else{
            throw new Error('Method not allowed')
        }
    }catch(error){
    res.writeHead(500, {'content-type': 'text/html'})
    res.end('<h1>Internal Server Error</h1>')
    }

   if(req.url === '/'){
res.writeHead(200, {'content-type': 'text/html'})
// res.end(JSON.stringify({message: "Internal Server Error"}))
res.end('<h1>Home Page</h1>')
    }else if(req.url === '/about'){
res.writeHead(200, {'content-type': 'text/html'})
res.end('<h1>About Page</h1>')
}else{
    res.writeHead(404, {'content-type': 'text/html'})
    res.end('<h1>Not Found</h1>')
}


})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})