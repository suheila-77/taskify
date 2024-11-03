const { readTasksFromFile } = require("../utils/fileHandler")

exports.getTasks=(req,res)=>{
  const tasks = readTasksFromFile();
  res.writehead(200, {'content-type': 'application/json'})
  res.end(JSON.stringify(tasks))
}