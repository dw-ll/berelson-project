import axios from 'axios';
export function fetchArchive() {
    return function (dispatch) {
        return axios.get('https://vessel-archives-server.herokuapp.com/fetch-archive')
            .then(res =>
                dispatch({ type: 'FETCH_ARCHIVE_PHOTOS', data: res.data }))
    }

}

