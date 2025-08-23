import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

interface VehicleCardProps {
  vehicle: Vehicle;
  selected: boolean;
  onPress: () => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <Image source={vehicle.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.model}>{vehicle.model}</Text>
        <Text style={styles.type}>{vehicle.type}</Text>
        <Text style={styles.price}>${vehicle.pricePerDay}/day</Text>
        <Text style={styles.rating}>Rating: {vehicle.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
  },
  selected: {
    borderColor: '#007AFF',
    backgroundColor: '#e6f0ff',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  model: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 14,
    color: '#007AFF',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
});

export default VehicleCard; 