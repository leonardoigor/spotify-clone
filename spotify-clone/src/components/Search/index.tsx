import { useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import PlaylistCard from '../../components/PlaylistCard';
import { mockPlaylists } from '../../mocks/playlists';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <TextField
                fullWidth
                variant="filled"
                placeholder="Search..."
                sx={{
                    backgroundColor: '#282828',
                    borderRadius: 2,
                    input: { color: 'white' }
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Typography variant="h5" sx={{ color: 'white', mt: 4, mb: 2 }}>
                Browse all
            </Typography>
            <Grid container spacing={3}>
                {mockPlaylists.map((playlist) => (
                    //@ts-ignore
                    <Grid item xs={12} sm={6} md={4} lg={3} key={playlist.id}>
                        <PlaylistCard playlist={playlist} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Search;