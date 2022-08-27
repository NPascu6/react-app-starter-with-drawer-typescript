//test
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
} from "../_colors";

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: _darkThemePrimaryColor
        },
        secondary: {
            main: _darkThemeSecondaryColor
        }
    },
    textColor: _darkThemeTextColor,
    backgroundColor: _darkThemeBackgroundColor
});

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: _lightThemePrimaryColor
        },
        secondary: {
            main: _lightThemeSecondaryColor
        }
    },
    textColor: _lightThemeTextColor,
    backgroundColor: _lightThemeBackgroundColor
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
