import axios from 'axios';
export async function fetchArchive() {

    console.log('inside fetch archive');
    var res = await axios.get('http://localhost:8080/fetch-archive');
    return {
        type: 'FETCH_ARCHIVE_PHOTOS',
        data: res.data
    }

}

