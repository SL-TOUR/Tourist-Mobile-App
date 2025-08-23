import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import { COLORS } from '../../../../constants/colors';
import { TripContext } from '../../../../context/TripContext';
import PaymentSummary from './PaymentSummary';

const PaymentScreen = () => {
  const { tripDetails, confirmTrip } = useContext(TripContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!cardNumber || cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Invalid card number';
    }
    if (!expiry || !expiry.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
      newErrors.expiry = 'Invalid expiry date (MM/YY)';
    }
    if (!cvc || cvc.length !== 3) {
      newErrors.cvc = 'Invalid CVC';
    }
    if (!name) {
      newErrors.name = 'Cardholder name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validate()) return;
    
    try {
      await confirmTrip();
      router.push('Confirmation');
    } catch (error) {
      setErrors({ ...errors, payment: 'Payment failed. Please try again.' });
    }
  };

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    const match = cleaned.match(/(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/);
    if (match) {
      const parts = [match[1], match[2], match[3], match[4]].filter(Boolean);
      setCardNumber(parts.join(' '));
    } else {
      setCardNumber('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Payment</Text>
      {tripDetails && (
        <PaymentSummary
          tripDetails={{
            ...tripDetails,
            visaPeriod: {
              start: tripDetails.visaPeriod.start || new Date(),
              end: tripDetails.visaPeriod.end || new Date(),
            },
          }}
        />
      )}
      
      <Text style={styles.sectionTitle}>Payment Method</Text>
      
      <Input
        label="Card Number"
        placeholder="1234 5678 9012 3456"
        value={cardNumber}
        onChangeText={formatCardNumber}
        keyboardType="numeric"
        maxLength={19}
        error={errors?.cardNumber}
      />
      
      <View style={styles.row}>
        <View style={[styles.col, { marginRight: 10 }]}>
          <Input
            label="Expiry Date"
            placeholder="MM/YY"
            value={expiry}
            onChangeText={setExpiry}
            maxLength={5}
            error={errors?.expiry}
          />
        </View>
        <View style={styles.col}>
          <Input
            label="CVC"
            placeholder="123"
            value={cvc}
            onChangeText={setCvc}
            keyboardType="numeric"
            maxLength={3}
            error={errors?.cvc}
          />
        </View>
      </View>
      
      <Input
        label="Cardholder Name"
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
        error={errors?.name}
      />
      
      {errors?.payment && <Text style={styles.error}>{errors.payment}</Text>}
      
      <Button 
        title="Confirm Payment" 
        onPress={handlePayment} 
        style={styles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
  },
  error: {
    color: COLORS.error,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default PaymentScreen;