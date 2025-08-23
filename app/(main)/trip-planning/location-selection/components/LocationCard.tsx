import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LocationCardProps {
  location: {
    id: string;
    name: string;
    image: any;
    rating: string;
  };
  selected: boolean;
  onPress: () => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <Image source={location.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{location.name}</Text>
        <Text style={styles.rating}>Rating: {location.rating}</Text>
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
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
});

export default LocationCard; 