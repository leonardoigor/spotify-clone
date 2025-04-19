import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    Button,
    Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';

export default function () {
    return (
        <Box
            sx={{
                width: 300,
                height: '100vh',
                bgcolor: '#000',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
                boxSizing: 'border-box',
            }}
        >
            {/* Topo: Título e cards */}
            <Box>
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    <Typography variant="subtitle1" fontWeight="bold">
                        Sua Biblioteca
                    </Typography>
                    <IconButton sx={{ color: '#fff' }}>
                        <AddIcon />
                    </IconButton>
                </Box>

                {/* Card 1 */}
                <Paper
                    sx={{
                        bgcolor: '#121212',
                        borderRadius: 2,
                        p: 2,
                        mb: 2,
                    }}
                >
                    <Typography fontWeight="bold" gutterBottom>
                        Crie sua primeira playlist
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        É fácil, vamos te ajudar.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 1,
                            bgcolor: '#fff',
                            color: '#000',
                            textTransform: 'none',
                            borderRadius: 5,
                            fontWeight: 'bold',
                        }}
                    >
                        Criar playlist
                    </Button>
                </Paper>

                {/* Card 2 */}
                <Paper
                    sx={{
                        bgcolor: '#121212',
                        borderRadius: 2,
                        p: 2,
                    }}
                >
                    <Typography fontWeight="bold" gutterBottom>
                        Que tal seguir um podcast novo?
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Avisaremos você sobre novos episódios.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 1,
                            bgcolor: '#fff',
                            color: '#000',
                            textTransform: 'none',
                            borderRadius: 5,
                            fontWeight: 'bold',
                        }}
                    >
                        Explore podcasts
                    </Button>
                </Paper>
            </Box>

            {/* Rodapé */}
            <Box sx={{ mt: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        fontSize: 12,
                        color: '#b3b3b3',
                        mb: 2,
                    }}
                >
                    {[
                        'Legal',
                        'Segurança e Centro de privacidade',
                        'Política de privacidade',
                        'Cookies',
                        'Sobre anúncios',
                        'Acessibilidade',
                        'Cookies',
                    ].map((text) => (
                        <Typography key={text} variant="caption">
                            {text}
                        </Typography>
                    ))}
                </Box>

                <Button
                    variant="outlined"
                    startIcon={<LanguageIcon />}
                    sx={{
                        borderRadius: 5,
                        textTransform: 'none',
                        color: '#fff',
                        borderColor: '#fff',
                        fontSize: 12,
                        px: 2,
                    }}
                >
                    Português do Brasil
                </Button>
            </Box>
        </Box>
    );
};

