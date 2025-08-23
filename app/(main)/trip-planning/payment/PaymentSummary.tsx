import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../constants/colors';

interface PaymentSummaryProps {
  tripDetails: {
    visaPeriod: { start: Date; end: Date };
    memberCount: number;
    petCount: number;
    vehicle?: { model: string; type: string; pricePerDay: number };
    guide?: { name: string; pricePerDay: number };
    [key: string]: any;
  };
}
const PaymentSummary: React.FC<PaymentSummaryProps> = ({ tripDetails }) => {
  if (!tripDetails) return null;

  const calculateTotal = () => {
    let total = 0;
    
    if (tripDetails.vehicle) {
      const days = Math.ceil((tripDetails.visaPeriod.end.getTime() - tripDetails.visaPeriod.start.getTime()) / (1000 * 60 * 60 * 24));
      total += tripDetails.vehicle.pricePerDay * days;
    }
    
    if (tripDetails.guide) {
      const days = Math.ceil((tripDetails.visaPeriod.end.getTime() - tripDetails.visaPeriod.start.getTime()) / (1000 * 60 * 60 * 24));
      total += tripDetails.guide.pricePerDay * days;
    }
    
    return total;
  };

  const totalAmount = calculateTotal();
  const advancePayment = totalAmount * 0.3; // 30% advance payment

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Summary</Text>
      
      <View style={styles.item}>
        <Text style={styles.label}>Duration:</Text>
        <Text style={styles.value}>
          {tripDetails.visaPeriod.start?.toLocaleDateString()} - {tripDetails.visaPeriod.end?.toLocaleDateString()}
        </Text>
      </View>
      
      <View style={styles.item}>
        <Text style={styles.label}>Travelers:</Text>
        <Text style={styles.value}>
          {tripDetails.memberCount} {tripDetails.memberCount > 1 ? 'people' : 'person'}
          {tripDetails.petCount > 0 ? ` + ${tripDetails.petCount} ${tripDetails.petCount > 1 ? 'pets' : 'pet'}` : ''}
        </Text>
      </View>
      
      {tripDetails.vehicle && (
        <View style={styles.item}>
          <Text style={styles.label}>Vehicle:</Text>
          <Text style={styles.value}>
            {tripDetails.vehicle.model} ({tripDetails.vehicle.type})
          </Text>
        </View>
      )}
      
      {tripDetails.guide && (
        <View style={styles.item}>
          <Text style={styles.label}>Guide:</Text>
          <Text style={styles.value}>{tripDetails.guide.name}</Text>
        </View>
      )}
      
      <View style={styles.divider} />
      
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>${totalAmount.toFixed(2)}</Text>
      </View>
      
      <View style={styles.advanceContainer}>
        <MaterialIcons name="payment" size={20} color={COLORS.primary} />
        <Text style={styles.advanceText}>Advance Payment (30%): ${advancePayment.toFixed(2)}</Text>
      </View>
      
      <Text style={styles.note}>
        Note: You can cancel your booking up to one week before arrival for a full refund.
      </Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: COLORS.textSecondary,
  },
  value: {
    color: COLORS.text,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  advanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  advanceText: {
    marginLeft: 5,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  note: {
    marginTop: 15,
    fontSize: 12,
    color: COLORS.textSecondary,
    fontStyle: 'italic',
  },
});

export default PaymentSummary;