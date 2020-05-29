export default function modeReducer(state = { dark: false }, action) {
    switch (action.type) {
        case "TOGGLE_MODE":
            var dark = !state.dark
            return { ...state, dark }
        default:
            return state
    }
} 