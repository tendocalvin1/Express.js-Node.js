// 🧪 Exercise 2 — Return Different Messages Based on URL
// Without using Express, make this happen:
// / → “Home Page”
// /about → “About Page”
// anything else → “Page not found”
// Only if statements allowed.



// 🔥 First — Understand the Core Rule
// Inside createServer((req, res) => {}):
// That function runs once per request
// You must send one response per request
// After res.end(), you’re done
// You cannot call res.end() three times.
// You cannot send three headers.
// You cannot ignore req.url.

// One request → One response.

// Burn that in.
import http from 'http'

const PORT = process.env.PORT  || 8000

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h2>Home Page</h2>')
    }else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end('<h2>About Page</h2>')
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end('<h2>Page not found</h2>')
    }
})


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})