import task from "../models/task.model.js";

export const getTasks = async(req, res) => {
     const tasks = await task.find({
     user: req.user.id
}).populate('user')
res.json(tasks);
};
export const createTask = async(req, res) => {
     const { title, description, date} = req.body

     console.log(req.user)

     const newTask = new task({
          title,
          description,
          date,
          user: req.user.id
     })

     const savedTask = await newTask.save()
     res.json(savedTask);

};
export const getTask = async(req, res) => {
     await task.findById(req.params.id).populate('user');
     if(!task) return res.status(404).json({message: 'Task not found'})
     res.json(task)
};

export const deleteTask = async(req, res) => {
     await task.findByIdAndDelete(req.params.id)
     if(!task) return res.status(404).json({message: 'Task not found'})
     return res.sendStatus(204);
};


export const updateTask = async(req, res) => {
     await task.findByIdAndUpdate(req.params.id, req.body,{ new: true,});
     if(!task) return res.status(404).json({message: 'Task not found'})
     res.json(task)
};