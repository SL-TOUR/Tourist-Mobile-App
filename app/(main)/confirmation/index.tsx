import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants/colors';
import { TripContext } from '../../../context/TripContext';
import Button from '../../../components/ui/Button';
import LottieView from 'lottie-react-native';

const ConfirmationScreen = () => {
  const { currentTrip, tripDetails, clearTrip } = useContext(TripContext);
  const router = useRouter();

  const handleDone = () => {
    clearTrip();
    router.replace('/(main)/home');
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/animations/success.json')}
        autoPlay
        loop={false}
        style={styles.animation}
      />
      
      <Text style={styles.title}>All Set and Ready!!</Text>
      <Text style={styles.subtitle}>We hope you enjoy your trip!!</Text>
      <Text style={styles.thankYou}>Thank you!!</Text>
      
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Your Trip Details:</Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Dates: </Text>
          {tripDetails?.visaPeriod.start?.toLocaleDateString()} - {tripDetails?.visaPeriod.end?.toLocaleDateString()}
        </Text>
        
        {tripDetails?.vehicle && (
          <Text style={styles.detailItem}>
            <Text style={styles.detailLabel}>Vehicle: </Text>
            {tripDetails.vehicle.model} ({tripDetails.vehicle.type})
          </Text>
        )}
        
        {tripDetails?.guide && (
          <Text style={styles.detailItem}>
            <Text style={styles.detailLabel}>Guide: </Text>
            {tripDetails.guide.name}
          </Text>
        )}
      </View>
      
      <Button 
        title="Done" 
        onPress={handleDone} 
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.background,
  },
  animation: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    color: COLORS.text,
    marginTop: 10,
  },
  thankYou: {
    fontSize: 18,
    color: COLORS.secondary,
    marginBottom: 30,
  },
  details: {
    width: '100%',
    backgroundColor: 'rgba(147, 218, 151, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  detailItem: {
    marginBottom: 8,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: COLORS.text,
  },
  button: {
    width: '100%',
  },
});

export default ConfirmationScreen;