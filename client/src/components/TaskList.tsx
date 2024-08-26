import React, { useState } from 'react';
import { getAllTasks, deleteTask, updateTask } from '../api/api';

interface Task {
    _id: string;
    name: string;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editingTask, setEditingTask] = useState<string | null>(null);
    const [newTaskName, setNewTaskName] = useState<string>('');
    const [tasksLoaded, setTasksLoaded] = useState<boolean>(false);

    const fetchTasks = async () => {
        const fetchedTasks = await getAllTasks();
        setTasks(fetchedTasks);
        setTasksLoaded(true);
    };

    const handleDelete = async (id: string) => {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task._id !== id));
    };

    const handleEdit = (task: Task) => {
        setEditingTask(task._id);
        setNewTaskName(task.name);
    };

    const handleUpdate = async (id: string) => {
        if (newTaskName.trim()) {
            await updateTask(id, { name: newTaskName });
            setTasks(
                tasks.map((task) =>
                    task._id === id ? { ...task, name: newTaskName } : task
                )
            );
            setEditingTask(null);
            setNewTaskName('');
        }
    };

    return (
        <div className="task-manager">
            <button onClick={fetchTasks} className="btn fetch-btn">
                Get All Tasks
            </button>
            {tasksLoaded && (
                <div className="tasks">
                    {tasks.map((task) => (
                        <div key={task._id} className="task-item">
                            {editingTask === task._id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={newTaskName}
                                        onChange={(e) => setNewTaskName(e.target.value)}
                                    />
                                    <button onClick={() => handleUpdate(task._id)}>Update</button>
                                </div>
                            ) : (
                                <div>
                                    <p>{task.name}</p>
                                    <button onClick={() => handleEdit(task)}>Edit</button>
                                    <button onClick={() => handleDelete(task._id)}>Delete</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;
