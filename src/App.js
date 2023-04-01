import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import TodoListApp from './components/TodoListApp';

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#fff',
      },
      primary: {
        main: 'rgba(199, 224, 227)',
      },
      text: {
        main: '#fff',
      },
      common: {
        gray: '#808080',
        water: 'rgba(193, 217, 220)',
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
          <TodoListApp />
      </ThemeProvider>
  );
};

export default App;
