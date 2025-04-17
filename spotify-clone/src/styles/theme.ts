import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1DB954',
        },
        background: {
            default: '#000',
            paper: '#121212',
        },
        text: {
            primary: '#fff',
            secondary: '#b3b3b3',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    textTransform: 'none',
                    padding: '8px 22px',
                },
            },
        },
    },
});
