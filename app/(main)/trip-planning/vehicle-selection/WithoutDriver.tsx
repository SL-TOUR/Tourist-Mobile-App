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
  rating: number;
  feedbacks: { id: string; rating: number; comment: string }[];
}
interface WithoutDriverScreenProps {
  onSelect: (vehicle: Vehicle) => void;
  selected: Vehicle | null;
}

// Mock data - in a real app, you would fetch this from your backend
const vehiclesWithoutDriver = [
  {
    id: '3',
    type: 'Sedan',
    model: 'Toyota Corolla',
    capacity: 4,
    image: require('../../../../assets/images/vehicles/sedan.jpg'),
    pricePerDay: 60,
    withDriver: false,
    rating: 4.5,
    feedbacks: [
      { id: '1', rating: 5, comment: 'Very clean car' },
      { id: '2', rating: 4, comment: 'Good mileage' },
    ],
  },
  // Add more vehicles as needed
];

const WithoutDriverScreen = ({ onSelect, selected }: WithoutDriverScreenProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={vehiclesWithoutDriver}
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

export default WithoutDriverScreen;