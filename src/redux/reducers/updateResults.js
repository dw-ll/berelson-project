const searchReducer = (state = { searchResults: [] }, action) => {
    switch (action.type) {
        case 'ADD_SEARCH_DATA':
            console.log("search reducer triggered")
            var newResults = action.data
            return newResults
        default:
            return state;
    }

};
export default searchReducer;
