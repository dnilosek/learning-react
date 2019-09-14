// Action create for selecting song
export const selectSong = (song) => {
    // Return redux action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};