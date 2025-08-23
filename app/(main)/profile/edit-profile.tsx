import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { COLORS } from '../../../constants/colors';
import { AuthContext } from '../../../context/AuthContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  languages: string;
  contactNumber: string;
  profileImage?: string;
}
interface Errors {
  [key: string]: string;
}

const EditProfileScreen = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState<FormData>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    country: user?.country || '',
    languages: user?.languages?.join(', ') || '',
    contactNumber: user?.contactNumber || '',
    profileImage: user?.profileImage || undefined,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, profileImage: result.assets[0].uri });
    }
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    
    try {
      setLoading(true);
      await updateUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country,
        languages: formData.languages.split(',').map(lang => lang.trim()),
        contactNumber: formData.contactNumber,
        profileImage: formData.profileImage,
      });
      router.back();
    } catch (error) {
      setErrors({ ...errors, form: 'Update failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {formData.profileImage ? (
          <Image source={{ uri: formData.profileImage }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <MaterialIcons name="person" size={40} color={COLORS.background} />
          </View>
        )}
        <View style={styles.editIcon}>
          <MaterialIcons name="edit" size={20} color={COLORS.background} />
        </View>
      </TouchableOpacity>
      
      {errors.form && <Text style={styles.error}>{errors.form}</Text>}
      
      <Input
        placeholder="Enter your first name"
        value={formData.firstName}
        onChangeText={(text: string) => {
          setFormData({ ...formData, firstName: text });
          setErrors({ ...errors, firstName: '' });
        }}
        error={errors.firstName}
      />
      
      <Input
        placeholder="Enter your last name"
        value={formData.lastName}
        onChangeText={(text: string) => {
          setFormData({ ...formData, lastName: text });
          setErrors({ ...errors, lastName: '' });
        }}
        error={errors.lastName}
      />
      
      <Input
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(text: string) => {
          setFormData({ ...formData, email: text });
          setErrors({ ...errors, email: '' });
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />
      
      <Input
        placeholder="Enter your country"
        value={formData.country}
        onChangeText={(text: string) => setFormData({ ...formData, country: text })}
      />
      
      <Input
        placeholder="e.g., English, Sinhala, Tamil"
        value={formData.languages}
        onChangeText={(text: string) => setFormData({ ...formData, languages: text })}
      />
      
      <Input
        placeholder="Enter your phone number"
        value={formData.contactNumber}
        onChangeText={(text: string) => setFormData({ ...formData, contactNumber: text })}
        keyboardType="phone-pad"
      />
      
      <Button 
        title="Save Changes" 
        onPress={handleSave} 
        loading={loading}
        style={styles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  imagePicker: {
    alignSelf: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.background,
  },
  button: {
    marginTop: 20,
  },
  error: {
    color: COLORS.error,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default EditProfileScreen;