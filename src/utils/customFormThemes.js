import { createTheme } from '@material-ui/core/styles';

export const formControlTheme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: 0,
          marginLeft: 0,
        },

        label: {
          fontFamily: 'Montserrat',
          fontSize: '10px',
          fontWeight: '500',
          lineHeight: '1.2',
          letterSpacing: '0.02em',

          '@media (min-width: 768px)': {
            fontSize: '16px',
            lineHeight: '1.19',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});
