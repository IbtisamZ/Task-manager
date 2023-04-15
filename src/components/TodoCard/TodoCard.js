import {
  Box,
  Card,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';

const TodoCard = () => {
  const [todoCount, setTodoCount] = useState(0);

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

  return (
      <Box sx={{
        width: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
          <Card sx={{
            px: 4,
            py: 6,
            m: 1,
            width: 1,
            height: 560,
            maxWidth: 530,
            borderRadius: 3,
            overflowY: 'scroll',
            boxShadow: `0 10px 20px rgba(0, 0, 0, .05), 
                    0 6px 6px rgba(0, 0, 0, .05)`,
          }}
          >
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 5,
              }}
              >
                  <Typography
                      variant="h4"
                      color="common.gray3"
                      sx={{ fontWeight: 600 }}
                  >
                      {currentDay}
                  </Typography>
                  <Typography
                      color="common.gray3"
                  >
                      {currentDate}
                  </Typography>
                  <Box mt={2}>
                      <Typography
                          color="common.gray2"
                          sx={{
                            fontWeight: 400,
                            fontSize: 13,
                          }}
                      >
                          {`${todoCount} tasks`}
                      </Typography>
                  </Box>
              </Box>
              <TodoForm setTodoCount={setTodoCount} />
          </Card>
      </Box>
  );
};

export default TodoCard;
