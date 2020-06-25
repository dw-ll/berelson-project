const archiveReducer = (state = { archivePhotos: [] }, action) => {
    switch (action.type) {
        case 'FETCH_ARCHIVE_PHOTOS':
            return action.data;
        default:
            return state
    }
};
export default archiveReducer;