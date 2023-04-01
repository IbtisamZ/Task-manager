import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import TodoListCard from './components/TodoListCard';

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#fff',
      },
      primary: {
        main: '#d7e6ea',
      },
      text: {
        main: '#fff',
      },
      common: {
        gray: '#808080',
        water: '#cce9ee',
        antiFlashWhite: '#eff1f2',
        silverSand: '#b8c3c6',
      },
    },
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            '&:focus': {
              outline: 'none',
            },
          },
        },
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <TodoListCard />
      </ThemeProvider>
  );
};

export default App;
