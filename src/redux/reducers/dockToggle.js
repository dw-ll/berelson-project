export default function dockReducer(state = { dock: false }, action) {
    switch (action.type) {
        case "TOGGLE_DOCK":
            console.log('Dock Action has been emitted.');
            var dock = !state.dock
            return { ...state, dock }
        default:
            return state
    }
}