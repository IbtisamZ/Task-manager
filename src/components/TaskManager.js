import React, {useState} from 'react';
import TaskForm from './TaskForm';

const TaskManager = () => {

    // set states
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const tasksData = {
        id: Date.now(),
        title: input,
        completed: false
    }; // to create tasks

    // adding tasks
    const addTask = (task) => {
        if (!task) { return; } // to prevent empty tasks
        setTasks([...tasks, tasksData]);
    };

    // deleting tasks
    const removeTask = (id) => {
        setTasks(tasks.filter((task)=> task.id !== id));
        // console.log('DELETEDD =>', id);
    };

    // toggling task state (completion)
    const toggleComplete = (id) => {
        setTasks(tasks.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed }; // to toggle state
          }
          return todo;
        }));
      };

    // displaying tasks
    const allTasks = tasks.map((item) => {
        // console.log(item);
        return (
        <>
        <div className="task-item" key={item.id}>
            {/* <input type="checkbox" value="completed" name="completed" id="completed"></input> */}
            <div className={item.completed ? "strike-through task-title" : "task-title"} onClick={() => toggleComplete(item.id)}>{item.title}</div>
            <button className="task-remove-button font-weight-bold" onClick={() => removeTask(item.id)}>X</button>
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