
import modeReducer from './modeToggle.js';
import dockReducer from './dockToggle.js';
import searchReducer from './updateResults';
import { combineReducers } from "redux";
const allReducers = combineReducers({
    dark: modeReducer,
    dock: dockReducer,
    searchResults: searchReducer
});
export default allReducers;