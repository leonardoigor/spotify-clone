import { Grid, Typography } from '@mui/material';
import PlaylistCard from '../../components/PlaylistCard';
import { mockPlaylists } from '../../mocks/playlists';

const Home = () => {
    const getGreeting = () => {
        const hour = new Date().getHours();
        console.log(hour);

        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 3 }}>
                {getGreeting()}
            </Typography>
            <Grid container spacing={3}>
                {mockPlaylists.map((playlist) => (
                    <Grid key={playlist.id}>
                        <PlaylistCard playlist={playlist} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
