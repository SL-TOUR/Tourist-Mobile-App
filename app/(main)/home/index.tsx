import { Link } from 'expo-router';
import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Header from '../../../components/shared/Header';
import { COLORS } from '../../../constants/colors';
import { LOCATION_CATEGORIES } from '../../../constants/locationCategories';
import LocationCategoryCard from './components/LocationCategoryCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="SL Tour" showCart />
      
      <ImageBackground
        source={require('../../../assets/images/auth/background.jpg')}
        style={styles.background}
        blurRadius={2}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Where would you like to go?</Text>
          <Text style={styles.subtitle}>Select your preferred location categories</Text>
          
          <FlatList
            data={LOCATION_CATEGORIES}
            renderItem={({ item }) => (
              <Link href={`/(main)/trip-planning/location-selection?category=${item.id}`} asChild>
                <LocationCategoryCard category={item} onPress={() => {}} />
              </Link>
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.categoryRow}
            contentContainerStyle={styles.categoryList}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
  categoryList: {
    paddingBottom: 20,
  },
  categoryRow: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default HomeScreen;