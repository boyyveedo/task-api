import { Router } from "express";
import { getAllTasks, createTask, updateTask, deleteTask, getTask } from '../controller/task.controller';

export const routes = Router()

routes.route('/').get(getAllTasks).post(createTask)
routes.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


