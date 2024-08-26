import { Itask, Task } from "../model/task.model";


// Get all tasks
export async function getAllTaskService(): Promise<Itask[]> {
    const tasks = await Task.find({});
    console.log('Tasks fetched:', tasks);
    return tasks;
}

// Create a new task
export async function createTaskService(taskData: Partial<Itask>): Promise<Itask> {
    const task = await Task.create(taskData)
    console.log(task)
    return await task.save();  // Save the new task to the database
}



// Get a specific task by ID
export async function getTaskSingle(taskId: string): Promise<Itask | null> {
    const task = await Task.findOne({ _id: taskId })
    if (!task) {
        console.log(`no task with id : ${taskId}`, 404)
    }
    return task
}

// Update a task by ID
export async function updateTaskService(taskId: string, updateData: Partial<Itask>): Promise<Itask | null> {

    const task = await Task.findByIdAndUpdate({ _id: taskId }, updateData, {
        new: true,
        runValidators: true,
    })
    if (!task) {
        console.log(`no task with id : ${taskId}`, 404)
    }
    return task
}

// Delete a task by ID
export async function deleteTaskService(taskId: string): Promise<Itask | null> {
    const task = await Task.findByIdAndDelete(taskId);  
    if (!task) {
        console.log(`No task with id: ${taskId}`);
    }
    return task;
}

