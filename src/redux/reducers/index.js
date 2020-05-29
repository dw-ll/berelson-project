
import modeReducer from './modeToggle.js';
import dockReducer from './dockToggle.js';
import searchReducer from './updateResults';
import landingReducer from './landingPhotos';
import { combineReducers } from "redux";
const allReducers = combineReducers({
    dark: modeReducer,
    dock: dockReducer,
    searchResults: searchReducer,
    slideShowPhotos: landingReducer
});
export default allReducers;