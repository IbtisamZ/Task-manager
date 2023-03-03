import { Fragment, useState } from 'react';
import {
  Box,
  Fab,
  Card,
  Divider,
  Checkbox,
  Collapse,
  TextField,
  IconButton,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoListCard = () => {
  // set states and intial values
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');
  const [todoCount, setTodoCount] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const currentDate = new Date().toLocaleString(
    'en-us',
    {
      month: 'short',
      year: 'numeric',
      day: 'numeric',
    },
  );
  const currentDay = new Date(currentDate).toLocaleString(
    'en-us',
    { weekday: 'long' },
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  // removing todos
  const removeTodoItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
    setTodoCount((currentCount) => currentCount - 1);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(input);
    setInput('');
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

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
                  <Typography
                      sx={{ overflowWrap: 'break-word' }}
                  >
                      {item.title}
                  </Typography>
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
                  type="submit"
                  disableRipple
                  size="small"
                  sx={{
                    ml: 3,
                    backgroundColor: 'primary.main',
                    color: 'text.main',
                    boxShadow: 'none',
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

  return (
      <>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: 650,
            maxWidth: 530,
            margin: {
              xs: '5rem 1rem',
              sm: '5rem auto',
            },
          }}
          >
              <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.5s ease',
                    backgroundColor: 'primary.main',
                    height: expanded ? 150 : 1,
                    maxHeight: expanded ? 150 : 1,
                    borderBottom: expanded ? '1px solid #f4f6f7' : null,
                    boxShadow: `0 10px 20px rgba(0,0,0,0.10),
                    0 6px 6px rgba(0,0,0,0.05)`,
                  }}
                  onClick={handleExpandClick}
              >
                  <Box mb={3} mt={4}>
                      <Box>
                          <Typography variant="h4" color="text.main">
                              {currentDay}
                          </Typography>
                      </Box>
                      <Box>
                          <Typography color="text.main">
                              {currentDate}
                          </Typography>
                      </Box>
                      <Box mt={2} mb={1} mx={2}>
                          <Divider
                              sx={{ backgroundColor: 'common.antiFlashWhite' }}
                          />
                      </Box>
                      {expanded
                        && (
                        <Box>
                            <Typography
                                color="text.main"
                                sx={{ fontWeight: 400, fontSize: 13 }}
                            >
                                {`${todoCount} tasks`}
                            </Typography>
                        </Box>
                        )}
                  </Box>
              </Box>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Card sx={{
                    height: expanded ? 500 : 1,
                    overflowY: 'scroll',
                    px: 4,
                    py: 6,
                    borderRadius: 0,
                    boxShadow: `0 10px 20px rgba(0,0,0,0.05), 
                    0 6px 6px rgba(0,0,0,0.05)`,
                  }}
                  >
                      {todoForm}
                      <Box mt={6}>
                          {todoItems}
                      </Box>
                  </Card>
              </Collapse>
          </Box>
          <Box sx={{
            bottom: 10,
            left: 10,
            position: 'absolute',
            color: 'common.silverSand',
            fontSize: 13,
          }}
          >
              — IbtisamZ —
          </Box>
      </>
  );
};
export default TodoListCard;
