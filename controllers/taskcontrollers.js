const IncomingForm = require("formidable/Formidable");
const { readTasksFromFile, writeTasksTofile } = require("../utils/fileHandler")

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

        const tasks = readTasksFromFile()
        const newTasks = {
            id: date.now(),
            title: fields.title,
            description : fields?.description || '',
            status : fields?.status || 'pending',
            image: files.image  ? `/uploads/${files.image.name}` : null,

        }
        
        tasks.push(newTask);
        writeTasksTofile(tasks);

        if(files.image){
            copyFileSync(files.image.path, path.join(__dirname, '../uploads', files.image.name))
        }
    })


}