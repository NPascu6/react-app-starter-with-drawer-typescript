import {createTheme} from '@mui/material';
import {
    _darkThemeBackgroundColor,
    _darkThemePrimaryColor,
    _darkThemeSecondaryColor,
    _darkThemeTextColor,
    _lightThemeBackgroundColor,
    _lightThemePrimaryColor,
    _lightThemeSecondaryColor,
    _lightThemeTextColor
} from "./_colors";

export const darkTheme = createTheme({
    typography: {
        fontFamily: '"Times New Roman", Times, serif;'
    },
    palette: {
        primary: {
            main: _darkThemePrimaryColor
        },
        secondary: {
            main: _darkThemeSecondaryColor
        }
    },
    textColor: _darkThemeTextColor,
    backgroundColor: _darkThemeBackgroundColor,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#B7B7B7 transparent',
                    '&::-webkit-scrollbar': {
                        width: `8px !important`,
                        height: 6,
                        backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'darkgray'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: 6,
                        backgroundColor: '#30362F',
                        minHeight: 2,
                        minWidth: 2,
                    },
                    '&::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: '#adadad',
                    },
                    '&::-webkit-scrollbar-thumb:active': {
                        backgroundColor: '#adadad',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#adadad',
                        cursor: 'pointer !important'
                    },
                    '&::-webkit-scrollbar-corner': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
    }
});

export const lightTheme = createTheme({
    typography: {
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    palette: {
        primary: {
            main: _lightThemePrimaryColor
        },
        secondary: {
            main: _lightThemeSecondaryColor
        }
    },
    textColor: _lightThemeTextColor,
    backgroundColor: _lightThemeBackgroundColor,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    scrollbarWidth: '2px',
                    scrollbarColor: '#B7B7B7 transparent',
                    '&::-webkit-scrollbar': {
                        width: `8px !important`,
                        height: 6,
                        backgroundColor: 'transparent !important',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'lightgray',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: 6,
                        backgroundColor: '#B7B7B7',
                        minHeight: 2,
                        minWidth: 2,
                    },
                    '&::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: '#adadad',
                    },
                    '&::-webkit-scrollbar-thumb:active': {
                        backgroundColor: '#adadad',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#adadad',
                    },
                    '&::-webkit-scrollbar-corner': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
    }
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
