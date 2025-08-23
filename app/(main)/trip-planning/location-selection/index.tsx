import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from '../../../../components/ui/Button';
import { COLORS } from '../../../../constants/colors';
import { LOCATION_CATEGORIES } from '../../../../constants/locationCategories';
import { TripContext } from '../../../../context/TripContext';
import LocationCard from './components/LocationCard';

const LocationSelectionScreen = () => {
  const { category } = useLocalSearchParams();
  const { currentTrip, tripDetails, createTrip, updateTripDetails } = useContext(TripContext);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!currentTrip && category) {
      createTrip(category as string);
    }
  }, [category, currentTrip]);

  const toggleLocation = (locationId: string) => {
    setSelectedLocations(prev => 
      prev.includes(locationId) 
        ? prev.filter(id => id !== locationId) 
        : [...prev, locationId]
    );
  };

  const handleNext = () => {
    if (!currentTrip) return;
    if (selectedLocations.length === 0) {
      setError("Oops! Please select at least one location to continue.");
      return;
    }
    setError(null);
    // In a real app, you would fetch actual location data based on IDs
    const locations = selectedLocations.map(id => ({
      id,
      name: `Location ${id}`,
      category: currentTrip.categoryId,
      image: require('../../../../assets/images/categories/beach.jpg'),
      description: 'Sample description',
    }));
    
    updateTripDetails({ selectedLocations: locations });
    router.push('VehicleSelection');
  };

  // Mock locations data - in a real app, you would fetch these based on category
  const locations = Array.from({ length: 10 }, (_, i) => ({
    id: `${i + 1}`,
    name: `${LOCATION_CATEGORIES.find(c => c.id === category)?.name} Location ${i + 1}`,
    image: require('../../../../assets/images/categories/beach.jpg'),
    rating: (Math.random() * 5).toFixed(1),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Preferred Locations</Text>
      <Text style={styles.subtitle}>Choose one or more locations you'd like to visit</Text>
      
      {error && (
        <Text style={{ color: COLORS.error, marginBottom: 10, textAlign: 'center' }}>{error}</Text>
      )}

      <FlatList
        data={locations}
        renderItem={({ item }: { item: any }) => (
          <LocationCard 
            location={item} 
            selected={selectedLocations.includes(item.id)}
            onPress={() => toggleLocation(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      
      <Button 
        title="Next" 
        onPress={handleNext} 
        disabled={selectedLocations.length === 0}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default LocationSelectionScreen;