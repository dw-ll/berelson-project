import searchData from '../../json/searchData';
import resultData from '../../json/resultData';
export function addSearchData(input) {
    if (input.length > 0) {
        console.log(input)
        const query = input.toLowerCase();
        var searchResult = [];
        for (let i = 0; i < searchData.length; i++) {
            for (let j = 0; j < searchData[i].tags.length; j++) {
                if (searchData[i].tags[j].includes(query)) {
                    searchResult.push(searchData[i])
                }
            }
        }
        console.log(searchResult)
        localStorage.setItem('searchResult', searchResult)
    }
    return {
        type: 'ADD_SEARCH_DATA',
        data: searchResult
    };


}