export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#1579C9',
    },
    secondary: {
      main: '#78BE22',
    },
    text: {
      primary: '#001628',
      secondary: '#828A99',
      hint: '#828A99',
      disabled: '#828A99',
    },
    error: {
      main: '#FF0000',
    },
    warning: {
      main: '#F9BF00',
    },
    success: {
      main: '#78BE22',
    },
    info: {
      main: '#1579C9',
    },
    divider: '#5b6062',
  },
  typography: {
    fontSize: 16,
    h1: {
      fontWeight: 800,
      fontSize: '3.3rem',
    },
    fontFamily: 'Montserrat',
    h2: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontSize: '0.7rem',
      fontWeight: 300,
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
};