import { createMuiTheme } from '@material-ui/core';
import { pink, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: pink,
  },
});

export { theme };
