import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TourScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Tours</Text>
        <Text style={styles.headerSubtitle}>Discover amazing destinations in Sri Lanka</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.tourCard}>
          <View style={styles.tourInfo}>
            <MaterialIcons name="landscape" size={40} color="#2E7D32" />
            <View style={styles.tourDetails}>
              <Text style={styles.tourTitle}>Cultural Heritage Tour</Text>
              <Text style={styles.tourDescription}>Explore ancient temples and historical sites</Text>
            </View>
          </View>
        </View>

        <View style={styles.tourCard}>
          <View style={styles.tourInfo}>
            <MaterialIcons name="beach-access" size={40} color="#2E7D32" />
            <View style={styles.tourDetails}>
              <Text style={styles.tourTitle}>Beach & Coastal Tour</Text>
              <Text style={styles.tourDescription}>Relax on pristine beaches and coastal areas</Text>
            </View>
          </View>
        </View>

        <View style={styles.tourCard}>
          <View style={styles.tourInfo}>
            <MaterialIcons name="nature" size={40} color="#2E7D32" />
            <View style={styles.tourDetails}>
              <Text style={styles.tourTitle}>Nature & Wildlife Tour</Text>
              <Text style={styles.tourDescription}>Experience diverse wildlife and nature</Text>
            </View>
          </View>
        </View>

        <View style={styles.tourCard}>
          <View style={styles.tourInfo}>
            <MaterialIcons name="terrain" size={40} color="#2E7D32" />
            <View style={styles.tourDetails}>
              <Text style={styles.tourTitle}>Hill Country Adventure</Text>
              <Text style={styles.tourDescription}>Discover tea plantations and mountain views</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#2E7D32',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E8F5E8',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  tourCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tourInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tourDetails: {
    marginLeft: 15,
    flex: 1,
  },
  tourTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tourDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});