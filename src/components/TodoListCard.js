import React, { useState } from 'react';

const TodoListCard = () => {

  // set states and intial values
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(input);
    setInput('');
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // adding todos
  const addTodoItem = (item) => {
    if (!item) { return; } // prevent empty values

    setTodo((prev) => 
    [
        ...prev, // saving previous todos
        {
          id: Date.now(),
          title: input,
          completed: false,
        }
      ]
      );
  };

  // removing todos
  const removeTodoItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  // toggling completion
  const toggleCompletion = (id) => {
    const toggleItem = todo.map((item) => {

        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
  
        return item;
      });

    setTodo(toggleItem);
  };

  const todoItems = todo.map((item) =>
    (
      <div className="task-item" key={item.id}>
        <div className={item.completed ? 'strike-through task-title' : 'task-title'} onClick={() => toggleCompletion(item.id)}>{item.title}</div>
        <button className="task-remove-button font-weight-bold" onClick={() => removeTodoItem(item.id)}>X</button>
      </div>
    ));

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <form>
          <input
            type="text"
            placeholder="Add a task.."
            value={input}
            name="text"
            className="task-input"
            onChange={handleInput}
          />
          <button className="add-button" onClick={handleSubmit}>Add</button>
        </form>
      </div>
      <div className="tasks-container">
        {todoItems}
      </div>
    </>
  );
}
export default TodoListCard;
