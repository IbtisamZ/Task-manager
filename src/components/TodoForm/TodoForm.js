import {
  Box,
  Fab,
  Checkbox,
  TextField,
  IconButton,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fragment, useState } from 'react';

const TodoForm = (props) => {
  const {
    setTodoCount = () => { },
  } = props;

  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  // adding todos
  const addTodoItem = (item) => {
    if (!item) { return; } // prevent empty values

    setTodo((prev) => [
      ...prev, // saving previous todos
      {
        id: Date.now(),
        title: input,
        completed: false,
      },
    ]);
    setTodoCount((currentCount) => currentCount + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(input);
    setInput('');
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // removing todos
  const removeTodoItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
    setTodoCount((currentCount) => currentCount - 1);
  };

  // toggling todo completion
  const toggleCompletion = (id) => {
    const toggleItem = todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });

    setTodo(toggleItem);
  };

  const todoForm = (
      <form onSubmit={handleSubmit}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
              <TextField
                  sx={{
                    width: {
                      xs: '70%',
                      sm: '80%',
                    },
                  }}
                  variant="standard"
                  placeholder="Add a task here.."
                  value={input}
                  onChange={handleInput}
              />
              <Fab
                  disableRipple
                  type="submit"
                  size="small"
                  sx={{
                    ml: 3,
                    color: 'text.main',
                    boxShadow: 'none',
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'common.water',
                    },
                  }}
                  aria-label="add"
                  onClick={handleSubmit}
              >
                  <AddIcon />
              </Fab>
          </Box>
      </form>
  );

  const todoItems = todo.map((item) => (
      <Fragment key={item.id}>
          <Box sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                textDecoration: item.completed ? 'line-through' : null,
                color: item.completed ? 'common.silverSand' : 'common.gray',
              }}
              >
                  <Checkbox
                      disableRipple
                      checked={item.completed}
                      onChange={() => toggleCompletion(item.id)}
                  />
                  <Box sx={{ overflowWrap: 'break-word' }}>
                      <Typography>
                          {item.title}
                      </Typography>
                  </Box>
              </Box>
              <Box>
                  <IconButton
                      disableRipple
                      aria-label="delete"
                      onClick={() => removeTodoItem(item.id)}
                  >
                      <DeleteIcon />
                  </IconButton>
              </Box>
          </Box>
      </Fragment>
  ));
  return (
      <Box>
          {todoForm}
          <Box mt={6}>
              {todoItems}
          </Box>
      </Box>
  );
};

export default TodoForm;
