import axios from 'axios';

async function fetchData(query=''){
    const response = await axios.get(`https://covid19.mathdro.id/api${query}`);
    return response.data
}

export default fetchData;