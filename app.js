const http = require("http")

const taskRoutes = require("./routes/taskRoutes")
const HOSTName = 'localhost'
const PORT = 7000

const server = http.createServer((req,res)=>{
  if(req.url=='/tasks'){
    taskRoutes(re,res)
  }
  else{
    res.writeHead(404, 'Not Found', {'content-type': 'application/JSON'})
    res.end(JSON.stringify({
        message: "you lost"
      }))
  }
 
})


server.listen(PORT, HOSTName,()=>{
    console.log(`the erver port is running on ${Port}`)
})