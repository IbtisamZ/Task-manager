import {
  Box,
  Card,
  Divider,
  Collapse,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';

const TodoCard = () => {
  const [todoCount, setTodoCount] = useState(0);
  const [expanded, setExpanded] = useState(true);

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

  return (
      <Box sx={{
        height: 700,
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
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: expanded ? 180 : 1,
                maxHeight: expanded ? 180 : 1,
                transition: 'all 0.5s ease',
                backgroundColor: 'primary.main',
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
                px: 4,
                py: 6,
                height: expanded ? 520 : 1,
                overflowY: 'scroll',
                borderRadius: 0,
                boxShadow: `0 10px 20px rgba(0,0,0,0.05), 
                    0 6px 6px rgba(0,0,0,0.05)`,
              }}
              >
                  <TodoForm setTodoCount={setTodoCount} />
              </Card>
          </Collapse>
      </Box>
  );
};

export default TodoCard;
