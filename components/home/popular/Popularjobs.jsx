import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import { fetchData } from '../../../hook/FetchData';
import styles from './popularjobs.style';
import EmiPopularJobCard from '../../common/cards/popular/EmiPopularJobCard';
import { isLoaded } from 'expo-font';

const Popularjobs = () => {
  const router = useRouter();
  console.log('in Popularjobs component');
  const [isLoading, setIsLoading] = useState(false);

  //const [error, setError] = useState(null);
  // const { data, isLoading, error } = useFetch('search', {
  //   query: 'React developer',
  //   num_pages: 1,
  //   page: 1,
  // });

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getJobsData = async () => {
      const data = await fetchData('search', {
        query: 'React developer',
        page: 1,
        num_pages: 1,
      });

      setResponseData((state) => data);
      setIsLoading(false);
    };

    getJobsData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={responseData}
          renderItem={({ item }) => <EmiPopularJobCard item={item} />}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          vertical
        />
      </View>
    </View>
  );
};

export default Popularjobs;
