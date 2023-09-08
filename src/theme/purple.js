
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette:{
        primary: {
            main: '#252254'
        },
        secondary: {
            main:'#19857b'
        },
        error:{
            main: red.A400
        },
    },
});