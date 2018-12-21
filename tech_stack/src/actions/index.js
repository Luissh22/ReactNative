export const selectLibrary = (libraryId) => { // This function is an action creator
    return { // This is the action
        type: 'select_library',
        payload: libraryId
    };
};