import axios from 'axios';
export function fetchArchive() {
    return function (dispatch) {
        console.log('Inside fetch archives.')
        return axios.get('https://vessel-archives-server.herokuapp.com/fetch-archive')
            .then(res =>
                dispatch({ type: 'FETCH_ARCHIVE_PHOTOS', data: res.data }))
            .catch(err => {
                dispatch({ type: 'FETCH_ARCHIVE_ERROR', })
            })
    }

}

