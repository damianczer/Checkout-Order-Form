import { createTheme } from '@mui/material/styles';

const palette = {
    light: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
        },
        secondary: {
            main: '#9c27b0',
            light: '#ba68c8',
            dark: '#7b1fa2',
        },
        success: {
            main: '#2e7d32',
            light: '#4caf50',
        },
        error: {
            main: '#d32f2f',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
            grey: '#f5f5f5',
            blueLight: '#f7f9ff',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
        divider: '#e0e0e0',
    },
    dark: {
        primary: {
            main: '#7899b8',
            light: '#a8c0d8',
            dark: '#5a7a99',
        },
        secondary: {
            main: '#b39dbd',
            light: '#d4c4db',
            dark: '#8a7a94',
        },
        success: {
            main: '#66bb6a',
            light: '#81c784',
        },
        error: {
            main: '#f44336',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
            grey: '#2d2d2d',
            blueLight: '#1f2530',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
        divider: '#424242',
    },
};

const typography = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
        fontSize: '3rem',
        fontWeight: 700,
    },
    h2: {
        fontSize: '2.5rem',
        fontWeight: 700,
    },
    h3: {
        fontSize: '2rem',
        fontWeight: 700,
    },
    h4: {
        fontSize: '1.75rem',
        fontWeight: 600,
    },
    h5: {
        fontSize: '1.5rem',
        fontWeight: 600,
    },
    h6: {
        fontSize: '1.25rem',
        fontWeight: 600,
    },
    body1: {
        fontSize: '1rem',
    },
    body2: {
        fontSize: '0.875rem',
    },
    caption: {
        fontSize: '0.75rem',
    },
};

const getComponents = (mode) => ({
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                backgroundColor: palette[mode].background.default,
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                borderBottom: `1px solid ${palette[mode].divider}`,
                borderRadius: 0,
            },
        },
    },
    MuiToolbar: {
        styleOverrides: {
            root: {
                paddingRight: '16px !important',
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
                borderRadius: 8,
            },
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: 8,
            },
        },
    },
    MuiTextField: {
        defaultProps: {
            size: 'small',
            margin: 'none',
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: mode === 'dark' ? palette[mode].text.secondary : palette[mode].primary.main,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: mode === 'dark' ? palette[mode].text.primary : palette[mode].primary.main,
                },
            },
            input: {
                '&:-webkit-autofill': {
                    WebkitBoxShadow: mode === 'dark' ? '0 0 0 100px #2d2d2d inset' : '0 0 0 100px #fff inset',
                    WebkitTextFillColor: palette[mode].text.primary,
                },
            },
        },
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                '&.Mui-focused': {
                    color: mode === 'dark' ? palette[mode].text.secondary : palette[mode].primary.main,
                },
            },
        },
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
            },
        },
    },
});

export const createAppTheme = (mode = 'light') => {
    return createTheme({
        palette: {
            mode,
            ...palette[mode],
        },
        typography,
        spacing: 8,
        shape: {
            borderRadius: 8,
        },
        components: getComponents(mode),
    });
};

export default createAppTheme;
