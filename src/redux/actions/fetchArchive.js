import axios from 'axios';
export function fetchArchive() {
    return function (dispatch) {
        console.log('Inside fetch archives.')
        return axios.get('http://localhost:8082/fetch-archive')
            .then(res =>
                dispatch({ type: 'FETCH_ARCHIVE_PHOTOS', data: res.data }))
    }

}

