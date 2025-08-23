import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VehiclesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vehicle Rental</Text>
        <Text style={styles.headerSubtitle}>Choose your perfect ride</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.vehicleCard}>
          <View style={styles.vehicleInfo}>
            <MaterialIcons name="directions-car" size={50} color="#2E7D32" />
            <View style={styles.vehicleDetails}>
              <Text style={styles.vehicleName}>Economy Car</Text>
              <Text style={styles.vehicleDescription}>Perfect for city tours and short trips</Text>
              <Text style={styles.vehiclePrice}>$25/day</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rent Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vehicleCard}>
          <View style={styles.vehicleInfo}>
            <MaterialIcons name="airport-shuttle" size={50} color="#2E7D32" />
            <View style={styles.vehicleDetails}>
              <Text style={styles.vehicleName}>SUV</Text>
              <Text style={styles.vehicleDescription}>Spacious and comfortable for families</Text>
              <Text style={styles.vehiclePrice}>$45/day</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rent Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vehicleCard}>
          <View style={styles.vehicleInfo}>
            <MaterialIcons name="local-taxi" size={50} color="#2E7D32" />
            <View style={styles.vehicleDetails}>
              <Text style={styles.vehicleName}>Luxury Sedan</Text>
              <Text style={styles.vehicleDescription}>Premium comfort with professional driver</Text>
              <Text style={styles.vehiclePrice}>$65/day</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rent Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vehicleCard}>
          <View style={styles.vehicleInfo}>
            <MaterialIcons name="rv-hookup" size={50} color="#2E7D32" />
            <View style={styles.vehicleDetails}>
              <Text style={styles.vehicleName}>Mini Van</Text>
              <Text style={styles.vehicleDescription}>Ideal for group travels and tours</Text>
              <Text style={styles.vehiclePrice}>$55/day</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rent Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vehicleCard}>
          <View style={styles.vehicleInfo}>
            <MaterialIcons name="two-wheeler" size={50} color="#2E7D32" />
            <View style={styles.vehicleDetails}>
              <Text style={styles.vehicleName}>Motorcycle</Text>
              <Text style={styles.vehicleDescription}>Quick and efficient for solo adventures</Text>
              <Text style={styles.vehiclePrice}>$15/day</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rent Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vehicleCard}>
          <View style={styles.vehicleInfo}>
            <MaterialIcons name="pedal-bike" size={50} color="#2E7D32" />
            <View style={styles.vehicleDetails}>
              <Text style={styles.vehicleName}>Bicycle</Text>
              <Text style={styles.vehicleDescription}>Eco-friendly exploration option</Text>
              <Text style={styles.vehiclePrice}>$8/day</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rent Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#2E7D32',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E8F5E8',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  vehicleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  vehicleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  vehicleDetails: {
    marginLeft: 20,
    flex: 1,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  vehicleDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  vehiclePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  rentButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  rentButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});