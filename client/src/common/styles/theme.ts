import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        padding: 0,
        minWidth: 0,
      },
      containedPrimary: {
        backgroundColor: '#ffb84d',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#ffb84d',
        },
      },
      containedSecondary: {
        backgroundColor: '#f5f5f5',
        color: '#707070',
        '&:hover': {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#ffb84d',
    },
    secondary: {
      main: '#f3f3f3',
    },
    grey: {
      50: grey[50],
      100: grey[100],
      200: grey[200],
      300: grey[300],
      400: grey[400],
      500: grey[500],
      600: grey[600],
      700: grey[700],
      800: grey[800],
      900: grey[900],
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
});

export { theme };
