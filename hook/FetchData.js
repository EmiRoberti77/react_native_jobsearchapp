import axios from 'axios';
import { RAPID_API_KEY } from './key';

export const fetchData = async (searchParam) => {
  var response;
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: searchParam,
      page: '1',
      num_pages: '1',
    },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };
  //console.log(options);
  try {
    response = await axios.request(options);
    //console.log(response.data.data);
  } catch (error) {
    console.error(error);
  }

  return response?.data.data;
};
