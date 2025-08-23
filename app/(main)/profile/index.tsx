import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/ui/Button';
import { COLORS } from '../../../constants/colors';
import { AuthContext } from '../../../context/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/edit-profile' as any)}>
          {user.profileImage ? (
            <Image source={{ uri: user.profileImage }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <MaterialIcons name="person" size={40} color={COLORS.background} />
            </View>
          )}
        </TouchableOpacity>
        
        <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <MaterialIcons name="location-on" size={24} color={COLORS.primary} />
          <Text style={styles.infoText}>{user.country || 'Not specified'}</Text>
        </View>
        
        <View style={styles.infoItem}>
          <MaterialIcons name="phone" size={24} color={COLORS.primary} />
          <Text style={styles.infoText}>{user.contactNumber || 'Not specified'}</Text>
        </View>
        
        <View style={styles.infoItem}>
          <MaterialIcons name="language" size={24} color={COLORS.primary} />
          <Text style={styles.infoText}>
            {user.languages?.join(', ') || 'Not specified'}
          </Text>
        </View>
      </View>
      
      <Button 
        title="Edit Profile" 
        onPress={() => router.push('/edit-profile' as any)}
        variant="outlined"
        style={styles.button}
      />
      
      <Button 
        title="Logout" 
        onPress={logout}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.text,
  },
  button: {
    marginTop: 15,
  },
});

export default ProfileScreen;