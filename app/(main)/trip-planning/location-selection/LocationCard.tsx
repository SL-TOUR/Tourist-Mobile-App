import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface LocationCardProps {
  location: any;
  selected: boolean;
  onPress: () => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, selected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.selected]}>
    <Text>{location.name || location.id}</Text>
    {/* Add more location details as needed */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selected: {
    borderColor: '#007AFF',
    backgroundColor: '#e6f0ff',
  },
});

export default LocationCard; 