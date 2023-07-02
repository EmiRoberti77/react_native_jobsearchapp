import axios from 'axios';

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
      'X-RapidAPI-Key': '5a3813a9b4msh2482a55bc044a22p1c0ee5jsn44ccb604a154',
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
