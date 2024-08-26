import React, { useState, useEffect } from 'react';
import TaskForm from './components/ TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';
import './styles/App.css';
import { Task } from './ types/Task';

const App: React.FC = () => {
    return (
        <div className="App">
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;
