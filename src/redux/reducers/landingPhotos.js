const landingReducer = (state = { landingPhotos: [] }, action) => {
    switch (action.type) {
        case 'FETCH_LANDING_PHOTOS':
            console.log("photo reducer triggered")
            var newResults = action.data
            return newResults
        default:
            return state;
    }

};
export default landingReducer;