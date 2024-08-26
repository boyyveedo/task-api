import React, { useState } from 'react';
import { createTask } from '../api/api';

const TaskForm: React.FC = () => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createTask({ name: taskName });
        setTaskName('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h4>Task Manager</h4>
            <div className="form-control">
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="e.g. wash dishes"
                />
                <button type="submit" className="btn submit-btn">Submit</button>
            </div>
        </form>
    );
};

export default TaskForm;
