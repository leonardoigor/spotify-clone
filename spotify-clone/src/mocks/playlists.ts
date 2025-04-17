import De4E5nZXkAY089R from "./../assets/images/De4E5nZXkAY089R.jpg"
export interface Playlist {
    id: string;
    name: string;
    description: string;
    image: string;
    owner: string;
    tracks: number;
    isFavorite: boolean
    isRecent: boolean
}

export const mockPlaylists: Playlist[] = [
    ...Array(50).fill(0).map((a, i) => {
        const id = i.toFixed()
        return {
            id,
            name: 'Daily Mix 1',
            description: 'Your daily mix of music',
            image: De4E5nZXkAY089R,
            owner: 'Spotify',
            tracks: 50,
            isRecent: true,
            isFavorite: true,
        }
    })
    // Adicionar mais mocks...
];