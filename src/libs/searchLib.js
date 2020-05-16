const search = {
    getQuery: function (props) {
        let query = props.match.params.search;
        return query;
    },
    getResults: function (input) {
        if (input.length > 0) {
            const query = input.toLowerCase();
            var searchResult = [];
            for (let i = 0; i < resultData.length; i++) {
                resultData[i].tags.forEach((tag) => {
                    if (tag && tag.value) {
                        if (!tag.value.value) {
                            if (
                                tag.value.includes(query) &&
                                !searchResult.includes(resultData[i])
                            ) {
                                searchResult.push(resultData[i]);
                            }
                        } else {
                            if (
                                tag.value.value.includes(query) &&
                                !searchResult.includes(resultData[i])
                            ) {
                                searchResult.push(resultData[i]);
                            }
                        }
                    }
                });
            }
            return searchResult;
        }
    }
}