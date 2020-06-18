
import modeReducer from './modeToggle.js';
import dockReducer from './dockToggle.js';
import searchReducer from './updateResults';
import landingReducer from './landingPhotos';
import archiveReducer from './archivePhotos';
import { combineReducers } from "redux";
const allReducers = combineReducers({
    dark: modeReducer,
    dock: dockReducer,
    searchResults: searchReducer,
    slideShowPhotos: landingReducer,
    archivePhotos: archiveReducer
});
export default allReducers;