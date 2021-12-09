import React from 'react';

const TaskForm = (props) => {
    const {
        addTask,
        setInput,
        input,
    } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput('');
    };

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    return (
    <div>
        <h1>Task Manager</h1>
        <form > 
            <input
                type="text"
                placeholder="Add a task.."
                value={input}
                name="text"
                className="todo-input"
                onChange={handleInput}
            />
            <button className="todo-button" onClick={handleSubmit}>Add</button>
        </form>
    </div>
    );
}
export default TaskForm;