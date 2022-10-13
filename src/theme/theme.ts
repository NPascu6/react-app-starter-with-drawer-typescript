//test
import {createTheme} from '@mui/material';
import {
    _businessDarkThemeBackgroundColor,
    _businessDarkThemePrimaryColor,
    _businessDarkThemeSecondaryColor,
    _businessDarkThemeTextColor,
    _businessLightThemeBackgroundColor,
    _businessLightThemePrimaryColor,
    _businessLightThemeSecondaryColor,
    _businessLightThemeTextColor,
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
} from "../assets/_colors";

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

export const pinkDarkTheme = createTheme({
    typography: {
        fontFamily: 'Lucida Console", "Courier New", monospace'
    },
    palette: {
        primary: {
            main: _pinkDarkThemePrimaryColor
        },
        secondary: {
            main: _pinkDarkThemeSecondaryColor
        }
    },
    textColor: _pinkDarkThemeTextColor,
    backgroundColor: _pinkDarkThemeBackgroundColor,
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Lucida Console", "Courier New", monospace';
        }
      `,
        },
    }
});

export const pinkLightTheme = createTheme({
    typography: {
        fontFamily: 'fantasy'
    },
    palette: {
        primary: {
            main: _pinkLightThemePrimaryColor
        },
        secondary: {
            main: _pinkLightThemeSecondaryColor
        }
    },
    textColor: _pinkLightThemeTextColor,
    backgroundColor: _pinkLightThemeBackgroundColor,
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'fantasy';
        }
      `,
        },
    }
});

export const businessDarkTheme = createTheme({
    typography: {
        fontFamily: 'fangsong'
    },
    palette: {
        primary: {
            main: _businessDarkThemePrimaryColor
        },
        secondary: {
            main: _businessDarkThemeSecondaryColor
        }
    },
    textColor: _businessDarkThemeTextColor,
    backgroundColor: _businessDarkThemeBackgroundColor,
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'fangsong';
        }
      `,
        },
    }
});

export const businessLightTheme = createTheme({
    typography: {
        fontFamily: 'Times, "Times New Roman", Georgia, serif'
    },
    palette: {
        primary: {
            main: _businessLightThemePrimaryColor
        },
        secondary: {
            main: _businessLightThemeSecondaryColor
        }
    },
    textColor: _businessLightThemeTextColor,
    backgroundColor: _businessLightThemeBackgroundColor,
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Times, "Times New Roman", Georgia, serif';
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
