import { createMuiTheme } from '@material-ui/core/styles';

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
});

export { theme };
