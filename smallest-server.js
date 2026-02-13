
import http from 'http'
const PORT = process.env.PORT  || 8000

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'})
    res.end("<h2>Hello world, my name is Tendo Calvin & I am a web and mobile app developer</h2>");
})


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})