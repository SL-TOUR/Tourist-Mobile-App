import { MaterialIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/colors';

interface HeaderProps {
  title: string;
  showCart?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCart = false }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>
      
      <Text style={styles.title}>{title}</Text>
      
      {showCart ? (
        <Link href="/my-trip" asChild>
          <TouchableOpacity style={styles.cartButton}>
            <MaterialIcons name="shopping-cart" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </Link>
      ) : (
        <View style={styles.emptySpace} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  cartButton: {
    padding: 5,
  },
  emptySpace: {
    width: 24,
  },
});

export default Header;