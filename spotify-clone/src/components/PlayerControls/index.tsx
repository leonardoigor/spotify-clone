import { Box, Slider, IconButton } from '@mui/material';
import { PlayArrow, Pause, SkipPrevious, SkipNext, VolumeUp } from '@mui/icons-material';

const PlayerControls = () => {
    return (
        <Box sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            backgroundColor: '#181818',
            borderTop: '1px solid #282828',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            zIndex: 1000
        }}>
            <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
                <Slider
                    sx={{ color: '#fff' }}
                    defaultValue={30}
                    aria-labelledby="continuous-slider"
                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <IconButton><SkipPrevious sx={{ color: '#fff' }} /></IconButton>
                        <IconButton><PlayArrow sx={{ color: '#fff', fontSize: 32 }} /></IconButton>
                        <IconButton><SkipNext sx={{ color: '#fff' }} /></IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <VolumeUp sx={{ color: '#fff' }} />
                        <Slider sx={{ width: 100, color: '#fff' }} defaultValue={80} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PlayerControls;