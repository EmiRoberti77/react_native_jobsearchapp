import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './popularjobcard.style';

const EmiPopularJobCard = ({ item }) => {
  // return (
  //   <TouchableOpacity
  //     style={styles.container(selectedJob, item)}
  //     onPress={() => handleCardPress(item)}
  //   >
  //     <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
  //       <Image source={{ uri: item.employer_logo }} />
  //     </TouchableOpacity>
  //   </TouchableOpacity>
  // );

  console.log('employee_name =' + item.employer_name);
  return (
    <View>
      <Text>{item.employer_name}</Text>
    </View>
  );
};

export default EmiPopularJobCard;
