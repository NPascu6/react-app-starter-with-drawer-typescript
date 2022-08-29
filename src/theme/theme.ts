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
    _lightThemeTextColor,
    _pinkDarkThemeBackgroundColor,
    _pinkDarkThemePrimaryColor,
    _pinkDarkThemeSecondaryColor,
    _pinkDarkThemeTextColor,
    _pinkLightThemeBackgroundColor,
    _pinkLightThemePrimaryColor,
    _pinkLightThemeSecondaryColor,
    _pinkLightThemeTextColor
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

export const pinkDarkTheme = createTheme({
    palette: {
        primary: {
            main: _pinkDarkThemePrimaryColor
        },
        secondary: {
            main: _pinkDarkThemeSecondaryColor
        }
    },
    textColor: _pinkDarkThemeTextColor,
    backgroundColor: _pinkDarkThemeBackgroundColor
});

export const pinkLightTheme = createTheme({
    palette: {
        primary: {
            main: _pinkLightThemePrimaryColor
        },
        secondary: {
            main: _pinkLightThemeSecondaryColor
        }
    },
    textColor: _pinkLightThemeTextColor,
    backgroundColor: _pinkLightThemeBackgroundColor
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
