const fs = require ("fs")
 const path = require ("path")

 const filepath = './data/tasks.json'

 exports.writeTasksTofile = (tasks)=>{
    fs.writeFileSync(filepath, JSON.stringify(tasks))
 }

 exports.readTasksFromFile = ()=>{
    if(!fs.existsSync(filepath)){
        writeTasksTofile
    }

    const data = fs.readFileSync(filepath);
    return JSON.parse(data)

 }