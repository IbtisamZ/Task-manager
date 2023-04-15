import { Box } from '@mui/material';
import TodoCard from './TodoCard/TodoCard';

const TodoListApp = () => (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
        <Box sx={{
          display: 'flex',
          flex: 5,
          width: 1,
        }}
        >
            <TodoCard />
        </Box>
        <Box sx={{
          width: 1,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          textAlign: 'center',
          color: 'common.gray',
          fontSize: 13,
          mb: 1,
        }}
        >
            — IbtisamZ —
        </Box>
    </Box>
);
export default TodoListApp;
