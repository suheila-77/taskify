const fs = require ("fs")
 const path = require ("path")

 const filepath = './data/tasks.json'

 const writeTasksTofile = (tasks)=>{
    fs.writeFileSync(filepath, JSON.stringify(tasks))
 }