export interface Song {
    id: string;
    title: string;
    artist: string;
    duration: string;
    album: string;
}

export const mockSongs: Song[] = [
    {
        id: '1',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        duration: '5:55',
        album: 'A Night at the Opera'
    },
    {
        id: '2',
        title: 'Hotel California',
        artist: 'Eagles',
        duration: '6:30',
        album: 'Hotel California'
    },
    // Adicione mais músicas...
];