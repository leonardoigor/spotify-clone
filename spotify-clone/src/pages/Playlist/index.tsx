import { Grid, Typography, Box, Avatar, IconButton } from '@mui/material';
import { PlayArrow, Favorite, MoreHoriz } from '@mui/icons-material';
import SongItem from '../../components/SongItem';
import { mockSongs } from '../../mocks/songs';
import De4E5nZXkAY089R from "./../../assets/images/De4E5nZXkAY089R.jpg"

const Playlist = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 4, gap: 4 }}>
                <Avatar
                    variant="square"
                    src={De4E5nZXkAY089R}
                    sx={{ width: 200, height: 200, boxShadow: 3 }}
                />
                <Box>
                    <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
                        PLAYLIST
                    </Typography>
                    <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
                        Discover Weekly
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2 }}>
                        Your weekly mixtape of fresh music • 30 songs
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton
                            sx={{
                                backgroundColor: '#1DB954',
                                '&:hover': { backgroundColor: '#1ED760' },
                                width: 56,
                                height: 56
                            }}
                        >
                            <PlayArrow sx={{ color: 'white', fontSize: 32 }} />
                        </IconButton>
                        <IconButton>
                            <Favorite sx={{ color: '#1DB954', fontSize: 32 }} />
                        </IconButton>
                        <IconButton>
                            <MoreHoriz sx={{ color: 'text.secondary', fontSize: 32 }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ mb: 2 }}>
                {mockSongs.map((song, index) => (
                    <SongItem key={song.id} song={song} index={index} />
                ))}
            </Box>
        </div>
    );
};

export default Playlist;