
import http from 'http'

const PORT = process.env.PORT || 8000

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type": "text/html"})
    console.log("<h3>Request received</h3>");
    res.end("Check your terminal")
})


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})