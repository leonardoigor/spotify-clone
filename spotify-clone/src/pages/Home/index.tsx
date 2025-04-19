import { Box, Grid, Typography } from '@mui/material';
import PlaylistCard from '../../components/PlaylistCard';
import { mockPlaylists } from '../../mocks/playlists';
import MainNavBar from '../../components/MainNavBar';
import Sidebar from '../../components/Sidebar';

const Home = () => {
    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div id='teste'>

            <MainNavBar />
            <Box sx={{ display: 'flex', flexDirection: "row" }}>
                <Sidebar />
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
            </Box>
        </div>
    );
};

export default Home;
