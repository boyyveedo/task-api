import axios from 'axios';

// Define your base API URL
const API_URL = 'http://localhost:8080/api/v1/task';

// Get all tasks
export const getAllTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Get a single task by ID
export const getTaskById = async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Create a new task
export const createTask = async (task: { name: string }) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

// Update a task by ID
export const updateTask = async (id: string, task: { name: string }) => {
    const response = await axios.patch(`${API_URL}/${id}`, task);
    return response.data;
};

// Delete a task by ID
export const deleteTask = async (id: string) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
