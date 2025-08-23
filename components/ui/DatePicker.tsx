import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface DatePickerProps {
  label: string;
  date: Date | null;
  onDateChange: (date: Date) => void;
  minimumDate?: Date | null;
  error?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, date, onDateChange, minimumDate, error }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Button title={date ? date.toDateString() : 'Select Date'} onPress={() => onDateChange(new Date())} />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default DatePicker; 