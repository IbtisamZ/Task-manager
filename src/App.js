import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import TodoListApp from './components/TodoListApp';

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#efeeea',
      },
      primary: {
        main: '#bab6b6',
      },
      text: {
        main: '#fff',
      },
      common: {
        gray: '#808080',
        gray2: 'rgba(0, 0, 0, 0.2)',
        gray3: 'gray',
        water: 'rgba(193, 217, 220)',
        antiFlashWhite: '#eff1f2',
        silverSand: '#b8c3c6',
        argent: '#c4c2c2',
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
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: '#808080',
          },
          input: {
            '&:-webkit-autofill': {
              WebkitTextFillColor: '#808080',
              transition: '1000000s ease-in-out',
            },
          },
        },
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <TodoListApp />
      </ThemeProvider>
  );
};

export default App;
