import React, {useState} from 'react';
import TaskForm from './TaskForm';

const TaskManager = () => {

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = (task) => {
        if (!task) { return; } // to prevent empty tasks
        setTasks([...tasks, {id: Date.now(), title: input, completed: false}]);
    };

    const removeTask = ({id}) => {
        setTasks(tasks.filter((task)=> task.id !== id));
        // console.log('DELETEDD =>', id);
    };

    const allTasks = tasks.map((item) => {
        // console.log(item);
        return (
        <>
        <div className="task-item" key={item.id}>
            <input type="checkbox" value="completed" name="completed" id="completed"></input>
            <div className="task-title">{item.title}</div>
            <button className="todo-remove-button font-weight-bold" onClick={() => removeTask(item)}>X</button>
        </div>
        </>
        );
    });

    return (
    <>
        <TaskForm 
        addTask={addTask} 
        input={input} 
        setInput={setInput} 
        removeTask={removeTask} 
        tasks={tasks} 
        setTasks={setTasks} />
        <div className="tasks-container">
        {allTasks}
        </div>
    </>
    );
}
export default TaskManager;