import axios from 'axios';
export function fetchLandingPhotos() {
    console.log('Inside fetch photos action')
    return async dispatch => {
        return axios.get(`http://localhost:8080/fetch-landing-photos`)
            .then(res => {
                console.log('fetched photos')
                dispatch({
                    type: 'FETCH_LANDING_PHOTOS',
                    data: res.data.photos
                })
            })
            .catch(err => console.log(err))

    }

}