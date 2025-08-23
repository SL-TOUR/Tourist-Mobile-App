import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TripDetails from '../../(main)/my-trip/TripDetails';
import Button from '../../../components/ui/Button';
import { COLORS } from '../../../constants/colors';
import { TripContext } from '../../../context/TripContext';

const MyTripScreen = () => {
  const { currentTrip, tripDetails, clearTrip } = useContext(TripContext);
  const router = useRouter();

  const handleClear = () => {
    clearTrip();
    router.back();
  };

  if (!currentTrip || !tripDetails) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No trip planned yet</Text>
        <Button 
          title="Plan a Trip" 
          onPress={() => router.push('/(main)/home')}
          style={styles.button}
        />
      </View>
    );
  }

  const isLocked = () => {
    if (!tripDetails.visaPeriod.start) return false;
    const oneWeekBefore = new Date(tripDetails.visaPeriod.start);
    oneWeekBefore.setDate(oneWeekBefore.getDate() - 7);
    return new Date() >= oneWeekBefore;
  };

  const safeTripDetails = {
    ...tripDetails,
    visaPeriod: {
      start: tripDetails.visaPeriod.start || new Date(),
      end: tripDetails.visaPeriod.end || new Date(),
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Trip</Text>
      
      <TripDetails trip={currentTrip} details={safeTripDetails} />
      
      <Button 
        title="Clear Trip" 
        onPress={handleClear} 
        disabled={isLocked()}
        variant={isLocked() ? 'outlined' : 'outlined'}
        style={styles.button}
      />
      
      {isLocked() && (
        <Text style={styles.note}>
          You can no longer modify this trip as it's within one week of your arrival date.
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  note: {
    marginTop: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default MyTripScreen;