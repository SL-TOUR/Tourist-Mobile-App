import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import GuideCard from './components/GuideCard';

// Mock data - in a real app, you would fetch this from your backend
const guidesWithVehicle = [
  {
    id: '2',
    name: 'Jane Doe',
    experience: 7,
    languages: ['English', 'Tamil'],
    image: require('../../../../assets/images/guides/guide2.jpg'),
    pricePerDay: 100,
    withVehicle: true,
    vehicle: {
      type: 'SUV',
      model: 'Toyota Land Cruiser',
      capacity: 7,
      image: require('../../../../assets/images/vehicles/suv.jpg'),
    },
    rating: 4.9,
    feedbacks: [
      { id: '1', rating: 5, comment: 'Amazing experience' },
      { id: '2', rating: 5, comment: 'Highly recommended' },
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
  vehicle?: {
    type: string;
    model: string;
    capacity: number;
    image: any;
  };
  rating: number;
  feedbacks: { id: string; rating: number; comment: string }[];
}
interface WithVehicleScreenProps {
  onSelect: (guide: Guide) => void;
  selected: Guide | null;
}
const WithVehicleScreen = ({ onSelect, selected }: WithVehicleScreenProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={guidesWithVehicle}
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

export default WithVehicleScreen;