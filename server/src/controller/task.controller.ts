import { Request, Response } from "express";
import { Task } from "../model/task.model";
import { getAllTaskService, createTaskService, getTaskSingle, updateTaskService, deleteTaskService } from "../service/task.service";


export async function getAllTasks(req: Request, res: Response): Promise<Response> {
    try {
        const tasks = await getAllTaskService()
        return res.status(200).json(tasks)


    } catch (error) {
        return res.status(500).json({ msg: 'Error loading task, please try again' });
    }
}



export async function createTask(req: Request, res: Response): Promise<Response> {
    try {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ msg: 'Task name is required' });
        }
        const task = await createTaskService(req.body)
        console.log(task)
        return res.status(201).json(task);
    } catch (error) {
        return res.status(500).json({ msg: 'Error creating task, please try again' });
    }
}



export async function getTask(req: Request, res: Response): Promise<Response> {
    try {
        const { id: taskId } = req.params
        const task = await getTaskSingle(taskId)
        return res.status(201).json({ task });

    } catch (error) {
        return res.status(500).json({ msg: 'Error fetching single task, please try again' });
    }
}

export async function updateTask(req: Request, res: Response): Promise<Response> {
    try {
        const { id: taskId } = req.params
        const task = await updateTaskService(taskId, req.body)
        return res.status(201).json({ task });

    } catch (error) {
        return res.status(500).json({ msg: 'Error updating task, please try again' });
    }
}

export async function deleteTask(req: Request, res: Response): Promise<Response> {
    try {
        const { id: taskId } = req.params;
        console.log(`Task ID from request params: ${taskId}`);  // Log taskId to debug

        if (!taskId) {
            return res.status(400).json({ msg: 'Task ID is required' });
        }

        const task = await deleteTaskService(taskId);

        if (!task) {
            return res.status(404).json({ msg: `No task found with id: ${taskId}` });
        }

        return res.status(200).json({ msg: 'Task successfully deleted', task });
    } catch (error) {
        console.error('Error deleting task:', error);
        return res.status(500).json({ msg: 'Failed to delete task, please try again' });
    }
}


