"use client";
const { createContext, useContext, useState } = require("react");
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTasks must be used whithin a provider");
    return context;
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: "1", title: "Tarea 1", description: "Descripción de la Tarea 1" },
        { id: "2", title: "Tarea 2", description: "Descripción de la Tarea 2" },
    ]);

    const createTask = (title, description) => {
        setTasks([...tasks, { title, description, id: uuid() }]);
    };

    const deleteTask = (id) => {
        setTasks([...tasks.filter((task) => task.id !== id)]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks([
            ...tasks.map((task) =>
                task.id === id
                    ? { ...task, ...updatedTask }
                    : task
            ),
        ]);
    };

    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
};
