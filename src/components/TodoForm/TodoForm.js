import {
  Box,
  Fab,
  Checkbox,
  TextField,
  IconButton,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { Fragment, useState } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const TodoForm = (props) => {
  const {
    setTodoCount = () => { },
  } = props;

  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodoItem = (item) => {
    if (!item) { return; } // prevent empty values

    setTodo((prev) => [
      ...prev, // saving previous state
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

  const removeTodoItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
    setTodoCount((currentCount) => currentCount - 1);
  };

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
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
              <TextField
                  sx={{
                    width: '60%',
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
                    ml: 4,
                    color: 'text.main',
                    boxShadow: 'none',
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'common.argent',
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
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
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
                      <ClearIcon sx={{ color: 'common.gray2' }} />
                  </IconButton>
              </Box>
          </Box>
      </Fragment>
  ));
  return (
      <Box>
          {todoForm}
          <Box mt={6} px={2}>
              {todoItems}
          </Box>
      </Box>
  );
};

export default TodoForm;
