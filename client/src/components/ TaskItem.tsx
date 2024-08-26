import React, { useState } from 'react';
import { updateTask } from '../api/api';

interface TaskItemProps {
    id: string;
    initialName: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, initialName }) => {
    const [taskName, setTaskName] = useState(initialName);

    const handleUpdate = async () => {
        await updateTask(id, { name: taskName });
        alert('Task updated');
    };

    return (
        <div className="task-item">
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default TaskItem;
