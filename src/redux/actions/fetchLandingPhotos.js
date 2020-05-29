import axios from 'axios';
export async function fetchLandingPhotos(titles) {

    try {

        var landingPhotos = await axios.get('/fetch-landing-photos',);
        console.log(landingPhotos)

    } catch (err) {
        console.log(err);
    }
    return {
        type: 'FETCH_LANDING_PHOTOS',
        data: landingPhotos
    };


}