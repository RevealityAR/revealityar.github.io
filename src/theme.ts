import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2771cc', // Sky blue
    },
    secondary: {
      main: '#649DE5', // Sky Blue Hover
    },
    info: {
      main: '#2A6DBF',
    },
    background: {
      default: '#fcf9e8',
      paper: 'transparent',
    },
    action: {
      hover: 'rgba(0,0,0,0.56)',
    },

    // FOR TEXT ? #34393A
    // action: {
    //   hover: 'rgba(0,0,0,0.56)',
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})
