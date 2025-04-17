import { useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import PlaylistCard from '../../components/PlaylistCard';
import SongItem from '../../components/SongItem';
import { mockPlaylists } from './../../mocks/playlists';
import { mockSongs } from './../../mocks/songs';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPlaylists = mockPlaylists.filter(playlist =>
        playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredSongs = mockSongs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <TextField
                fullWidth
                variant="filled"
                placeholder="Search for songs, artists, or playlists..."
                sx={{
                    backgroundColor: '#282828',
                    borderRadius: 2,
                    input: { color: 'white' },
                    mb: 4
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
                <>
                    <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
                        Songs
                    </Typography>
                    {filteredSongs.map((song, index) => (
                        <SongItem key={song.id} song={song} index={index} />
                    ))}
                </>
            )}

            <Typography variant="h5" sx={{ color: 'white', mt: 4, mb: 2 }}>
                Browse all
            </Typography>
            <Grid container spacing={3}>
                {filteredPlaylists.map((playlist) => (
                    <Grid
                        key={playlist.id}
                    // item
                    // xs={12}
                    // sm={6}
                    // md={4}
                    // lg={3}
                    >
                        <PlaylistCard playlist={playlist} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Search;