import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import VehicleCard from './components/VehicleCard';

interface Vehicle {
  id: string;
  type: string;
  model: string;
  capacity: number;
  image: any;
  pricePerDay: number;
  withDriver: boolean;
  driver?: {
    id: string;
    name: string;
    rating: number;
    languages: string[];
  };
  rating: number;
  feedbacks: { id: string; rating: number; comment: string }[];
}
interface WithDriverScreenProps {
  onSelect: (vehicle: Vehicle) => void;
  selected: Vehicle | null;
}

// Mock data - in a real app, you would fetch this from your backend
const vehiclesWithDriver = [
  {
    id: '1',
    type: 'SUV',
    model: 'Toyota Land Cruiser',
    capacity: 7,
    image: require('../../../../assets/images/vehicles/suv.jpg'),
    pricePerDay: 120,
    withDriver: true,
    driver: {
      id: '101',
      name: 'John Doe',
      rating: 4.8,
      languages: ['English', 'Sinhala'],
    },
    rating: 4.7,
    feedbacks: [
      { id: '1', rating: 5, comment: 'Excellent service' },
      { id: '2', rating: 4, comment: 'Very comfortable ride' },
    ],
  },
  // Add more vehicles as needed
];

const WithDriverScreen = ({ onSelect, selected }: WithDriverScreenProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={vehiclesWithDriver}
        renderItem={({ item }) => (
          <VehicleCard 
            vehicle={item} 
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

export default WithDriverScreen;