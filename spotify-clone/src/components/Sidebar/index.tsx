import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Search, LibraryMusic, Favorite } from '@mui/icons-material';
import { mockUser } from '../../mocks/user';

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: '#000',
                    color: '#fff'
                },
            }}
        >
            <List>
                <ListItem component="a" href="/">
                    <ListItemIcon sx={{ color: '#fff' }}><Home /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component="a" href="/search">
                    <ListItemIcon sx={{ color: '#fff' }}><Search /></ListItemIcon>
                    <ListItemText primary="Search" />
                </ListItem>
                <ListItem component="a" href="/library">
                    <ListItemIcon sx={{ color: '#fff' }}><LibraryMusic /></ListItemIcon>
                    <ListItemText primary="Your Library" />
                </ListItem>
            </List>
            <Divider sx={{ backgroundColor: '#333' }} />
            <List>
                {mockUser.playlists.map((playlist) => (
                    <ListItem
                        component="a"
                        href={`/playlist/${playlist.id}`}
                        key={playlist.id}
                        sx={{
                            '&:hover': {
                                backgroundColor: '#282828'
                            }
                        }}
                    >
                        <ListItemIcon sx={{ color: '#fff' }}><Favorite /></ListItemIcon>
                        <ListItemText primary={playlist.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;