
import modeReducer from './modeToggle.js';
import dockReducer from './dockToggle.js';
import searchReducer from './updateResults';
import archiveReducer from './archivePhotos';
import { combineReducers } from "redux";
const allReducers = combineReducers({
    dark: modeReducer,
    dock: dockReducer,
    searchResults: searchReducer,
    archivePhotos: archiveReducer
});
export default allReducers;