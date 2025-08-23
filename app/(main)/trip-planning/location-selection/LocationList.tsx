import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import LocationCard from './LocationCard';

interface Location {
  id: string;
  [key: string]: any;
}
interface LocationListProps {
  locations: Location[];
  selectedLocations: string[];
  onToggleLocation: (id: string) => void;
}
const LocationList = ({ locations, selectedLocations, onToggleLocation }: LocationListProps) => {
  return (
    <FlatList
      data={locations}
      renderItem={({ item }) => (
        <LocationCard 
          location={item} 
          selected={selectedLocations.includes(item.id)}
          onPress={() => onToggleLocation(item.id)}
        />
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No locations found</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});

export default LocationList;