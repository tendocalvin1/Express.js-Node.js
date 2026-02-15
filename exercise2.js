// 🧪 Exercise 2 — Return Different Messages Based on URL
// Without using Express, make this happen:
// / → “Home Page”
// /about → “About Page”
// anything else → “Page not found”
// Only if statements allowed.

import http from 'http'

const PORT = process.env.PORT

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    if(page === '/'){
        console.log("Home Page")
    }else if (page === '/about'){
        console.log("About Page")
    }else if(page === '/contact'){
        console.log("Contact Page")
    }else {
        console.log("Page not found")
    }
})


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})