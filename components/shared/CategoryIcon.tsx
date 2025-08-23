import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';

interface CategoryIconProps {
  name: string;
  size?: number;
  color?: string;
}

const iconMap: Record<string, string> = {
  beach: 'beach-access',
  'hill country': 'landscape',
  wildlife: 'pets',
  'cultural and heritage': 'account-balance',
  'spirited and wellness': 'spa',
  'eco and adventure': 'forest',
  'urban experience': 'location-city',
  'bird watching': 'flutter-dash',
  camping: 'cabin',
  waterfalls: 'waterfall',
  'turtle watching': 'egg-alt',
  'island life': 'island',
  wetlands: 'water',
  village: 'cottage',
  'colonial heritage and architecture': 'architecture',
  'water sports': 'kayaking',
  'trekking and hiking': 'hiking',
  'train tours': 'train',
  'unesco heritages': 'account-balance',
  'lake sides': 'water',
};

const CategoryIcon: React.FC<CategoryIconProps> = ({ name, size = 24, color = COLORS.primary }) => {
  const iconName = iconMap[name.toLowerCase()] || 'help';
  return (
    <View style={styles.container}>
      <MaterialIcons name={iconName as any} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryIcon;