
import { archiveRef } from '../../libs/archiveLib';

const archiveReducer = (state = archiveRef, action) => {
    console.log('archiver reducer triggered');
    console.log(action)
    switch (action.type) {
        case 'FETCH_ARCHIVE_PHOTOS':
            return action.data;
        case 'FETCH_ARCHIVE_ERROR':
            return state
        default:
            return state
    }
};
export default archiveReducer;