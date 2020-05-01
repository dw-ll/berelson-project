export function changeDock() {
    console.log('Dock Action has been fired.');
    return {
        type: 'TOGGLE_DOCK'
    }
}