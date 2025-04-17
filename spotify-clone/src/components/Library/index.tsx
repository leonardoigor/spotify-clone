import { Grid, Typography } from '@mui/material';
import PlaylistCard from '../../components/PlaylistCard';
import { mockPlaylists } from '../../mocks/playlists';

const Library = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 3 }}>
                Your Library
            </Typography>
            <Grid container spacing={3}>
                {mockPlaylists.map((playlist) => (
                    <Grid
                        key={playlist.id}
                    // item
                    // xs={12}

                    // sm={6}
                    // md={4}
                    // lg={3}
                    >
                        {/* <PlaylistCard playlist={playlist} /> */}
                        teste
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Library;