const http = require("http")

const taskRoutes = require("./routes/taskRoutes")
const HOSTName = 'localhost'
const PORT = 7000

const server = http.createServer((req,res)=>{
  if(req.url=='/tasks'){
    taskRoutes(req,res)
  }
  else{
    res.writeHead(404, 'Not Found', {'content-type': 'application/JSON'})
    res.end(JSON.stringify({
        message: "sorry you got lost"
      }))
  }
 
})


server.listen(PORT, HOSTName,()=>{
    console.log(`the Server port is running on ${PORT}`)
})