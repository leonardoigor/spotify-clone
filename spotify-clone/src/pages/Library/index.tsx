import { useState } from 'react';
import { Grid, Typography, Tabs, Tab, Box, Chip } from '@mui/material';
import { Favorite, LibraryMusic, Album, Person } from '@mui/icons-material';
import PlaylistCard from '../../components/PlaylistCard';
import SongItem from '../../components/SongItem';
import { mockPlaylists } from './../../mocks/playlists';
import { mockSongs } from './../../mocks/songs';

const Library = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');

    // Filtros para playlists
    const filteredPlaylists = mockPlaylists.filter(playlist => {
        if (activeFilter === 'favorites') return playlist.isFavorite;
        if (activeFilter === 'recent') return playlist.isRecent;
        return true;
    });

    // Categorias para organização
    const libraryCategories = [
        { id: 'playlists', name: 'Playlists', icon: <LibraryMusic />, count: 12 },
        { id: 'artists', name: 'Artists', icon: <Person />, count: 8 },
        { id: 'albums', name: 'Albums', icon: <Album />, count: 5 },
        { id: 'favorites', name: 'Liked Songs', icon: <Favorite />, count: 23 }
    ];

    return (
        <Box sx={{ pb: 8 }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
                Your Library
            </Typography>

            {/* Abas de navegação */}
            <Tabs
                value={activeTab}
                onChange={(_, newValue) => setActiveTab(newValue)}
                sx={{
                    mb: 3,
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#1DB954'
                    }
                }}
            >
                <Tab label="Playlists" sx={{ color: 'white' }} />
                <Tab label="Artists" sx={{ color: 'white' }} />
                <Tab label="Albums" sx={{ color: 'white' }} />
                <Tab label="Liked Songs" sx={{ color: 'white' }} />
            </Tabs>

            {/* Filtros */}
            <Box sx={{ mb: 4, display: 'flex', gap: 1 }}>
                {['all', 'recent', 'favorites'].map((filter) => (
                    <Chip
                        key={filter}
                        label={filter.charAt(0).toUpperCase() + filter.slice(1)}
                        variant={activeFilter === filter ? 'filled' : 'outlined'}
                        onClick={() => setActiveFilter(filter)}
                        sx={{
                            color: activeFilter === filter ? 'black' : 'white',
                            bgcolor: activeFilter === filter ? '#1DB954' : 'transparent',
                            borderColor: '#535353',
                            '&:hover': {
                                bgcolor: activeFilter === filter ? '#1ED760' : '#2A2A2A'
                            }
                        }}
                    />
                ))}
            </Box>

            {/* Categorias */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
                {libraryCategories.map((category) => (
                    <Grid
                        key={category.id}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                p: 2,
                                bgcolor: '#181818',
                                borderRadius: 2,
                                cursor: 'pointer',
                                '&:hover': { bgcolor: '#282828' }
                            }}
                        >
                            <Box sx={{
                                bgcolor: '#333',
                                p: 1.5,
                                borderRadius: 1,
                                mr: 2,
                                color: '#1DB954'
                            }}>
                                {category.icon}
                            </Box>
                            <Box>
                                <Typography variant="body1" sx={{ color: 'white' }}>
                                    {category.name}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                    {category.count} items
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Playlists */}
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Your Playlists
            </Typography>
            <Grid container spacing={3}>
                {filteredPlaylists.map((playlist) => (
                    <Grid
                        //  item 
                        //  xs={12} 
                        //  sm={6} 
                        //  md={4}
                        //   lg={3} 
                        key={playlist.id}>
                        <PlaylistCard
                            playlist={playlist}
                        // variant="library"
                        // onFavorite={() => console.log('Favorite:', playlist.id)}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Recently Played */}
            <Typography variant="h6" sx={{ color: 'white', mt: 4, mb: 2 }}>
                Recently Played
            </Typography>
            <Box sx={{ bgcolor: '#181818', borderRadius: 2, overflow: 'hidden' }}>
                {mockSongs.slice(0, 5).map((song, index) => (
                    <SongItem
                        key={`recent-${song.id}`}
                        song={song}
                        index={index}
                    // variant="recent"
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Library;