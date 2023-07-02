import React from 'react';
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
import { useFetch } from '../../../hook/useFetch';
import styles from './popularjobs.style';
import EmiPopularJobCard from '../../common/cards/popular/EmiPopularJobCard';

const Popularjobs = () => {
  const router = useRouter();

  console.log('in Popularjobs component');

  // const { data, isLoading, error } = useFetch('search', {
  //   query: 'React developer',
  //   num_pages: '1',
  // });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 1, 2, 1, 2]}
            renderItem={({ item }) => <EmiPopularJobCard />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
