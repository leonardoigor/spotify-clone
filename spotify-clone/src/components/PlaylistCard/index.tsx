import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Playlist } from '../../mocks/playlists';

interface PlaylistCardProps {
    playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
    return (
        <Card sx={{ backgroundColor: '#181818', cursor: 'pointer', '&:hover': { backgroundColor: '#282828' } }}>
            <CardMedia
                component="img"
                height="180"
                image={playlist.image}
                alt={playlist.name}
            />
            <CardContent>
                <Typography variant="h6" color="white">{playlist.name}</Typography>
                <Typography variant="body2" color="textSecondary">{playlist.description}</Typography>
            </CardContent>
        </Card>
    );
};

export default PlaylistCard;