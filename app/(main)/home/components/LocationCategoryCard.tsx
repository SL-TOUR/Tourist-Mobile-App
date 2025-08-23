import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../../constants/colors';

interface LocationCategoryCardProps {
  category: {
    id: string;
    name: string;
    image: any;
    icon: string;
  };
  onPress?: () => void;
}
const LocationCategoryCard: React.FC<LocationCategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={category.image} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <MaterialIcons name={category.icon as any} size={24} color={COLORS.background} />
        <Text style={styles.title}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: COLORS.background,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default LocationCategoryCard;