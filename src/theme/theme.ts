//test
import {createTheme} from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#8F6593'
        },
        secondary: {
            main: '#CDCDCD'
        }
    },
    textColor: '#3B252C',
    backgroundColor: '#E3E4DB'
});

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#CDCDCD'
        },
        secondary: {
            main: '#8F6593'
        }
    },
    textColor: '#F9EBE0',
    backgroundColor: '#463F1A'
});

declare module '@mui/material/styles' {
    interface Theme {
        backgroundColor: string;
        textColor: string;
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        backgroundColor?: string;
        textColor?: string;
    }
}