export interface User {
    name: string;
    playlists: string[];
}

export const mockUser = {
    name: 'John Doe',
    playlists: [
        { id: '1', name: 'My Favorites' },
        { id: '2', name: 'Rock Classics' }
    ]
};