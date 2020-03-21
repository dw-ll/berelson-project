export function changeMode() {
    console.log('Action has been fired.');
    return {
        type: 'TOGGLE_MODE'
    }
}