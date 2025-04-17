import { ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import { FavoriteBorder, MoreHoriz } from '@mui/icons-material';
import { Song } from '../../mocks/songs';

interface SongItemProps {
    song: Song;
    index: number;
}

const SongItem = ({ song, index }: SongItemProps) => {
    return (
        <ListItem sx={{ '&:hover': { backgroundColor: '#282828' } }}>
            <Typography variant="body2" sx={{ width: 40, color: 'text.secondary' }}>{index + 1}</Typography>
            <ListItemText
                primary={song.title}
                secondary={song.artist}
                sx={{ color: 'white' }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary', mx: 2 }}>{song.duration}</Typography>
            <IconButton>
                <FavoriteBorder sx={{ color: 'text.secondary' }} />
            </IconButton>
            <IconButton>
                <MoreHoriz sx={{ color: 'text.secondary' }} />
            </IconButton>
        </ListItem>
    );
};

export default SongItem;