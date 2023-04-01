import { Box } from '@mui/material';
import TodoCard from './TodoCard/TodoCard';

const TodoListApp = () => (
    <Box sx={{ width: 1, height: 1 }}>
        <TodoCard />
        <Box sx={{
          width: 1,
          textAlign: 'center',
          color: 'common.gray',
          fontSize: 13,
          mt: 6,
          mb: 1,
        }}
        >
            — IbtisamZ —
        </Box>
    </Box>
);
export default TodoListApp;
