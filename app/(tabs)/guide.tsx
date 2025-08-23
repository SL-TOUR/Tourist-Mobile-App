import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GuideScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tour Guides</Text>
        <Text style={styles.headerSubtitle}>Find experienced local guides</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.guideCard}>
          <View style={styles.guideInfo}>
            <View style={styles.avatar}>
              <MaterialIcons name="person" size={40} color="#FFFFFF" />
            </View>
            <View style={styles.guideDetails}>
              <Text style={styles.guideName}>Kasun Perera</Text>
              <Text style={styles.guideSpecialty}>Cultural Heritage Specialist</Text>
              <View style={styles.ratingContainer}>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>5.0 (24 reviews)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.guideCard}>
          <View style={styles.guideInfo}>
            <View style={styles.avatar}>
              <MaterialIcons name="person" size={40} color="#FFFFFF" />
            </View>
            <View style={styles.guideDetails}>
              <Text style={styles.guideName}>Nuwan Silva</Text>
              <Text style={styles.guideSpecialty}>Wildlife & Nature Guide</Text>
              <View style={styles.ratingContainer}>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star-half" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>4.8 (31 reviews)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.guideCard}>
          <View style={styles.guideInfo}>
            <View style={styles.avatar}>
              <MaterialIcons name="person" size={40} color="#FFFFFF" />
            </View>
            <View style={styles.guideDetails}>
              <Text style={styles.guideName}>Amara Fernando</Text>
              <Text style={styles.guideSpecialty}>Beach & Coastal Expert</Text>
              <View style={styles.ratingContainer}>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>4.9 (18 reviews)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.guideCard}>
          <View style={styles.guideInfo}>
            <View style={styles.avatar}>
              <MaterialIcons name="person" size={40} color="#FFFFFF" />
            </View>
            <View style={styles.guideDetails}>
              <Text style={styles.guideName}>Sandun Rathnayake</Text>
              <Text style={styles.guideSpecialty}>Hill Country Adventure</Text>
              <View style={styles.ratingContainer}>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <MaterialIcons name="star-border" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>4.7 (26 reviews)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact</Text>
          </TouchableOpacity>
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
  guideCard: {
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
  guideInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guideDetails: {
    marginLeft: 15,
    flex: 1,
  },
  guideName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  guideSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  contactButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});