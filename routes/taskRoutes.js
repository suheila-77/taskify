const { getTasks, updateTask, deleteTask, createTask } = require("../controllers/taskcontrollers")

taskRoutes = (req,res)=>{
    if(req.method === 'GET'){
        getTasks(req,res)
    }
    else if(req.method === 'POST'){
    createTask(req,res)
    }else if(req.method === 'PATCH'){
        updateTask(req,res)
        }
       else if (req.method === 'DELETE'){
        deleteTask(req,res)
       }

       else{
        res.writeHead(404, 'NOT FOUND', {'content-type ': 'application/json'})
        res.end(JSON.stringify({
            message: "unknown method required"
        }))
       }
}

module.exports = taskRoutes