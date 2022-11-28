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
            styleOverrides: `
        @font-face {
          font-family: '"Times New Roman", Times, serif;';
        }
      `,
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
            styleOverrides: `
        @font-face {
          font-family: 'Arial, Helvetica, sans-serif';
        }
      `,
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
