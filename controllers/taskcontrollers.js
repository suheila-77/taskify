const IncomingForm = require("formidable/Formidable");
const { readTasksFromFile } = require("../utils/fileHandler")

exports.getTasks=(req,res)=>{
  const tasks = readTasksFromFile();
  res.writehead(200, {'content-type': 'application/json'})
  res.end(JSON.stringify(tasks))
}


exports.createTasks = (req,res)=>{
    const form = new IncomingForm()
    form.parse(req,(err, fields,files)=>{
        if(err){
            res.writehead(400, {'content-type': 'appliction/json'}),
                res.end(JSON.stringify({
                    message: "Eror parsing form"
                }))
                return;
            
        }
    })
}