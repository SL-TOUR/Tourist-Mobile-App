import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../constants/colors';

// Add types for props
interface Trip {
  status: string;
  createdAt: string | number | Date;
}
interface Vehicle {
  model: string;
  type: string;
  pricePerDay: number;
  withDriver?: boolean;
  driver?: { name: string; rating: number };
}
interface Guide {
  name: string;
  experience: number;
  pricePerDay: number;
  languages: string[];
}
interface Details {
  visaPeriod: { start: Date; end: Date };
  memberCount: number;
  petCount: number;
  vehicle?: Vehicle;
  guide?: Guide;
}
const TripDetails = ({ trip, details }: { trip: Trip; details: Details }) => {
  const calculateTotal = () => {
    let total = 0;
    
    if (details.vehicle) {
      const days = Math.ceil((details.visaPeriod.end.getTime() - details.visaPeriod.start.getTime()) / (1000 * 60 * 60 * 24));
      total += details.vehicle.pricePerDay * days;
    }
    
    if (details.guide) {
      const days = Math.ceil((details.visaPeriod.end.getTime() - details.visaPeriod.start.getTime()) / (1000 * 60 * 60 * 24));
      total += details.guide.pricePerDay * days;
    }
    
    return total;
  };

  const totalAmount = calculateTotal();
  const advancePayment = totalAmount * 0.3;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.status}>{trip.status.toUpperCase()}</Text>
        <Text style={styles.date}>
          {new Date(trip.createdAt).toLocaleDateString()}
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Travel Dates</Text>
        <Text style={styles.sectionValue}>
          {details.visaPeriod.start?.toLocaleDateString()} - {details.visaPeriod.end?.toLocaleDateString()}
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Travelers</Text>
        <Text style={styles.sectionValue}>
          {details.memberCount} {details.memberCount > 1 ? 'people' : 'person'}
          {details.petCount > 0 ? ` + ${details.petCount} ${details.petCount > 1 ? 'pets' : 'pet'}` : ''}
        </Text>
      </View>
      
      {details.vehicle && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle</Text>
          <Text style={styles.sectionValue}>
            {details.vehicle.model} ({details.vehicle.type})
          </Text>
          {details.vehicle.withDriver && details.vehicle.driver && (
            <View style={styles.driver}>
              <MaterialIcons name="person" size={16} color={COLORS.textSecondary} />
              <Text style={styles.driverText}>
                {details.vehicle.driver.name} (Rating: {details.vehicle.driver.rating})
              </Text>
            </View>
          )}
        </View>
      )}
      
      {details.guide && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Guide</Text>
          <Text style={styles.sectionValue}>
            {details.guide.name} (Experience: {details.guide.experience} years)
          </Text>
          <Text style={styles.guideLanguages}>
            Languages: {details.guide.languages.join(', ')}
          </Text>
        </View>
      )}
      
      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Payment Summary</Text>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Total:</Text>
          <Text style={styles.paymentValue}>${totalAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Advance Paid:</Text>
          <Text style={styles.paymentValue}>${advancePayment.toFixed(2)}</Text>
        </View>
        <View style={[styles.paymentRow, { marginTop: 10 }]}>
          <Text style={styles.paymentLabel}>Balance Due:</Text>
          <Text style={styles.paymentValue}>${(totalAmount - advancePayment).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(147, 218, 151, 0.1)',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  status: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  date: {
    color: COLORS.textSecondary,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  sectionValue: {
    color: COLORS.text,
  },
  driver: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  driverText: {
    marginLeft: 5,
    color: COLORS.textSecondary,
  },
  guideLanguages: {
    color: COLORS.textSecondary,
    marginTop: 5,
  },
  paymentSection: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  paymentTitle: {
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  paymentLabel: {
    color: COLORS.text,
  },
  paymentValue: {
    fontWeight: 'bold',
    color: COLORS.text,
  },
});

export default TripDetails;