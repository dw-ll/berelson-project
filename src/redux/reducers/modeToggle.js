export default function modeReducer(state = { dark: false }, action) {
    switch (action.type) {
        case "TOGGLE_MODE":
            console.log('Action has been emitted.');

            var dark = !state.dark
            localStorage.setItem('dark', dark);
            return { ...state, dark }
        default:
            return state
    }
}