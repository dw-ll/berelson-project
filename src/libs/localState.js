export const loadState = () => {
    try {
        const fetchedState = localStorage.getItem('dark')
        if (fetchedState === null) {
            return undefined
        }
        return JSON.parse(fetchedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('dark', serializedState)
    } catch (err) {
        console.log(err)
    }
}
