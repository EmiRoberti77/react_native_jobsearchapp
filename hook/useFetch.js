import { useState, useEffect } from 'react';
import axios from 'axios';

const SUCCESS = 200;
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseStatus, setResponseStatus] = useState(200);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      'X-RapidAPI-Key': '5a3813a9b4msh2482a55bc044a22p1c0ee5jsn44ccb604a154',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setData(response.data.data);
      //console.log(response.data.data);
      console.log(response.status);
      setResponseStatus(response.status);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      alert('there is a error loading job search data');
    } finally {
      if (responseStatus.status === SUCCESS) {
        error = null;
      }
      setIsLoading(false);
      console.log('error value in fetchData', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
