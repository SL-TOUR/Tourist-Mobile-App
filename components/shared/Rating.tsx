import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';

interface RatingProps {
  value: number;
  size?: number;
  color?: string;
}

const Rating: React.FC<RatingProps> = ({ value, size = 16, color = COLORS.secondary }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  return (
    <View style={styles.container}>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <MaterialIcons key={i} name="star" size={size} color={color} />;
        } else if (i === fullStars && hasHalfStar) {
          return <MaterialIcons key={i} name="star-half" size={size} color={color} />;
        } else {
          return <MaterialIcons key={i} name="star-outline" size={size} color={color} />;
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Rating;