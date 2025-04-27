// import express from 'express';
// import { tasksData } from './tasksData';
// import { v4 as uuidv4 } from 'uuid';


// const router = express.Router(); 

// router.get('/', (req, res) => {
//     res.json(tasksData);
// });

// // Get task details
// router.get('/:id', (req, res) => {
//     const { id } = req.params
//     const task = tasksData.tasks.find(task => task.id === id);
//     if (!task) {
//         return res.status(404).json({ status: 404, message: 'Task not found' });
//     }
//     return res.status(200).json(task);
// });

// //Add a task
// router.post('/', (req, res) => {
//     const { title, description, deadline, priority, done } = req.body;
//     const newTask = {
//         id: uuidv4(),
//         title,
//         description,
//         deadline,
//         priority,
//         done,
//         created_at: new Date().toISOString(),
//         updated_at: new Date().toISOString()
//     };
//     tasksData.tasks.push(newTask);
//     res.status(201).json(newTask);
//     tasksData.total_results++;
// });

// //Update an existing task
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const taskIndex = tasksData.tasks.findIndex(task => task.id === id); 
//     if (taskIndex === -1) {
//         return res.status(404).json({ status: 404, message: 'Task not found' });
//     }
//     const updatedTask = { ...tasksData.tasks[taskIndex], ...req.body, id:id };
//     tasksData.tasks[taskIndex] = updatedTask;
//     tasksData.tasks[taskIndex].updated_at = new Date().toISOString();
//     res.json(updatedTask);
// });

// //Delete a task
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     const taskIndex = tasksData.tasks.findIndex(task => task.id === id);
    
//     if (taskIndex === -1) return res.status(404).json({status:404,message:'Task not found'});
    
//     tasksData.tasks.splice(taskIndex, 1);
//     res.status(204).send();
//     tasksData.total_results--;
// });

// export default router;

import express from 'express';
import Task from './taskModel';

const router = express.Router(); // eslint-disable-line

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

// create a task
router.post('/', async (req, res) => {
    const task = await Task(req.body).save();
    res.status(201).json(task);
});

// Update Task
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Task.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Task Updated Successfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Task' });
    }
});

// delete Task
router.delete('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Task.deleteOne({
        _id: req.params.id,
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Task' });
    }
});


export default router;
