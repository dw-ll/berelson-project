
import modeReducer from './modeToggle.js';
import { combineReducers } from "redux";
const allReducers = combineReducers({
    dark: modeReducer
});
export default allReducers;