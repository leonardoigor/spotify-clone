import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Box,
    Typography,
    Button,
    Divider,
} from '@mui/material';
import { Home, Search, ShoppingCart, AccessTime, HomeOutlined, DownloadForOfflineOutlined } from '@mui/icons-material';
import spotify_icon_black from "./../../assets/images/spotify_icon_black.png"
const MainNavBar: React.FC = () => {
    return (
        <AppBar position="static" color="default" sx={{ bgcolor: '#000', px: 2 }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Esquerda: Logo + Ícones */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img
                        src={spotify_icon_black}
                        alt="Spotify"
                        style={{
                            height: 32,
                            backgroundColor: "#eeee",
                            borderRadius: "100px",
                            cursor: "pointer"

                        }}
                    />

                    <IconButton sx={{ color: '#b3b3b3', background: "#1f1f1f" }}>
                        <HomeOutlined />
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#121212',
                            px: 1,
                            borderRadius: 20,
                            ml: 1,
                        }}
                    >
                        <Search sx={{ color: '#b3b3b3' }} />
                        <InputBase
                            placeholder="O que você quer ouvir?"
                            sx={{
                                ml: 1,
                                color: 'white',
                                width: 200,
                            }}
                        />
                    </Box>
                </Box>

                {/* Direita: Links e botão */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: '#666' }} />
                    <IconButton sx={{ color: '#b3b3b3' }}>
                        <ShoppingCart />
                    </IconButton>
                    <Typography color="white" variant="body2">Premium</Typography>
                    <Typography color="white" variant="body2">Suporte</Typography>
                    <Typography color="white" variant="body2">Baixar</Typography>
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: '#666' }} />
                    <DownloadForOfflineOutlined sx={{ color: '#b3b3b3' }} />
                    <Typography color="white" variant="body2">Instalar aplicativo</Typography>
                    <Typography color="white" variant="body2">Inscrever-se</Typography>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: 'white',
                            color: 'black',
                            textTransform: 'none',
                            borderRadius: '999px',
                            px: 3,
                        }}
                    >
                        Entrar
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default MainNavBar;
