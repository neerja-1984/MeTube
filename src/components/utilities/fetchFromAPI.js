// axios == fetch data from APIs or send data to a server.
import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL , 
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10',
    //   sets umber of results which can come
      maxResults : 10,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

//   async function -- return promise
export const fetchFromAPI = async (url) => {
    // await waits till promise resolved
    // get data from the promise

    // ${BASE_URL}/${url} ==> making of a url [add the BASE_URL + something else == actuall url (api _endpoint) form whaere data will be fetched ]

    const { data } = await axios.get(` ${BASE_URL}/${url}`, options);
  
    return data;
};