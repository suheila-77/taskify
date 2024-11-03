const { getTasks, updateTask, deleteTask } = require("../controllers/taskcontrollers")

taskRoutes = (req,res)=>{
    if(req.method === 'GET'){
        getTasksasks(req,res)
    }
    else if(req.method === 'POST'){
        createTask(req,res)
    }else if(req.method === 'PATCH'){
        updateTaskteTask(req,res)
        }
       else if (req.method === 'DELETE'){
        deleteTasksk(req,res)
       }

       else{
        res.writeHead(404, 'NOT FOUND', {'content-type ': 'application/json'})
        res.end(JSON.stringify({
            message: "unknown method required"
        }))
       }
}

module.exports = taskRoutes