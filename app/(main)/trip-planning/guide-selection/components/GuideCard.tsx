import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface GuideCardProps {
  guide: any;
  selected: boolean;
  onPress: () => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, selected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.selected]}>
    <Text>{guide.name}</Text>
    {/* Add more guide details as needed */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selected: {
    borderColor: '#007AFF',
    backgroundColor: '#e6f0ff',
  },
});

export default GuideCard; 