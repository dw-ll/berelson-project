
import modeReducer from './modeToggle.js';
import dockReducer from './dockToggle.js';
import { combineReducers } from "redux";
const allReducers = combineReducers({
    dark: modeReducer,
    dock: dockReducer
});
export default allReducers;