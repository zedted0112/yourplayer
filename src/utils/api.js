import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'x-rapidapi-key': 
        'a5713166aemsh75279e4a4dd9f65p1495c9jsnf32b70aefe96',
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};
  export const fetchDataFromApi = async (url) => {

    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

