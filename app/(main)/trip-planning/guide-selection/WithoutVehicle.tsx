import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import GuideCard from './components/GuideCard';

// Mock data - in a real app, you would fetch this from your backend
const guidesWithoutVehicle = [
  {
    id: '1',
    name: 'John Smith',
    experience: 5,
    languages: ['English', 'Sinhala'],
    image: require('../../../../assets/images/guides/guide1.jpg'),
    pricePerDay: 80,
    withVehicle: false,
    rating: 4.8,
    feedbacks: [
      { id: '1', rating: 5, comment: 'Excellent guide' },
      { id: '2', rating: 4, comment: 'Very knowledgeable' },
    ],
  },
  // Add more guides as needed
];

interface Guide {
  id: string;
  name: string;
  experience: number;
  languages: string[];
  image: any;
  pricePerDay: number;
  withVehicle: boolean;
  rating: number;
  feedbacks: { id: string; rating: number; comment: string }[];
}
interface WithoutVehicleScreenProps {
  onSelect: (guide: Guide) => void;
  selected: Guide | null;
}
const WithoutVehicleScreen = ({ onSelect, selected }: WithoutVehicleScreenProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={guidesWithoutVehicle}
        renderItem={({ item }) => (
          <GuideCard 
            guide={item} 
            selected={selected?.id === item.id}
            onPress={() => onSelect(item)}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    padding: 15,
  },
});

export default WithoutVehicleScreen;