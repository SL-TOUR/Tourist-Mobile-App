import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../../components/ui/Button';
import { COLORS } from '../../../../constants/colors';
import { TripContext } from '../../../../context/TripContext';
import WithDriverScreen from './WithDriver';
import WithoutDriverScreen from './WithoutDriver';

const Tab = createMaterialTopTabNavigator();

const VehicleSelectionScreen = () => {
  const { tripDetails } = useContext(TripContext);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const router = useRouter();

  const handleVehicleSelect = (vehicle: any) => {
    setSelectedVehicle(vehicle);
  };

  const handleNext = () => {
    if (!selectedVehicle) return;
    router.push('GuideSelection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Vehicle</Text>
      <Text style={styles.subtitle}>
        {tripDetails?.vehicleType ? `Preferred: ${tripDetails.vehicleType}` : 'Any vehicle type'}
      </Text>
      
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textSecondary,
          tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
          tabBarLabelStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen name="WithDriver">
          {() => <WithDriverScreen onSelect={handleVehicleSelect} selected={selectedVehicle} />}
        </Tab.Screen>
        <Tab.Screen name="WithoutDriver">
          {() => <WithoutDriverScreen onSelect={handleVehicleSelect} selected={selectedVehicle} />}
        </Tab.Screen>
      </Tab.Navigator>
      
      <Button 
        title="Next" 
        onPress={handleNext} 
        disabled={!selectedVehicle}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 20,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 10,
    marginLeft: 20,
  },
  button: {
    margin: 20,
  },
});

export default VehicleSelectionScreen;