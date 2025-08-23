import { BlurView } from 'expo-blur';
import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface BlurContainerProps {
  children: ReactNode;
  intensity?: number;
}

const BlurContainer: React.FC<BlurContainerProps> = ({ children, intensity = 80 }) => {
  return (
    <BlurView intensity={intensity} tint="light" style={styles.container}>
      <View style={styles.innerContainer}>
        {children}
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
  },
  innerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 15,
    padding: 20,
  },
});

export default BlurContainer;