// 🧪 Exercise 3 — Send Three Different Response Types
// Create:
// /text → plain text
// /json → JSON object
// /html → small HTML page
// You must use res.writeHead correctly.


import http from 'http';

const PORT = process.env.PORT

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end("Check your terminal")
    console.log("I need to make 2 full stack projects this month otherwise am dead")

    res.writeHead(200, {'content-type': 'application/json'})
    res.end("Check your terminal")
    console.log("I have to be the best SWE possible so that I can land a remote role")


    res.writeHead(200, {'content-type': 'text/html'})
    res.end("Check your terminal")
    console.log("My name is Tendo Calvin and I have to be disciplined and consistent throughout 2026.")
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})