import { Grid, Typography, Box, Avatar } from '@mui/material';
import SongItem from '../../components/SongItem';
import { mockSongs } from '../../mocks/songs';

const Playlist = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 4, gap: 4 }}>
                <Avatar
                    variant="square"
                    src="/images/playlist-cover.jpg"
                    sx={{ width: 200, height: 200, boxShadow: 3 }}
                />
                <Box>
                    <Typography variant="h3" sx={{ color: 'white', mb: 2 }}>Playlist Name</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                        Created by User • 50 songs
                    </Typography>
                </Box>
            </Box>
            <div>
                {mockSongs.map((song, index) => (
                    <SongItem key={song.id} song={song} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Playlist;