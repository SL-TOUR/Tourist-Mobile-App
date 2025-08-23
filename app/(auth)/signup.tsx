import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import BlurContainer from '../../components/ui/BlurContainer';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { COLORS } from '../../constants/colors';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  languages: string;
  contactNumber: string;
}
interface Errors {
  [key: string]: string;
}

const SignupScreen = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    languages: '',
    contactNumber: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const validateStep1 = () => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Errors = {};
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.languages) newErrors.languages = 'Languages are required';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      // Implement your signup logic here
      router.replace('/(main)/home');
    } catch (err) {
      setErrors({ ...errors, form: 'Signup failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/auth/background.jpg')} 
      style={styles.background}
      blurRadius={5}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <BlurContainer>
          <Text style={styles.title}>Create Account</Text>
          
          {errors.form && <Text style={styles.error}>{errors.form}</Text>}
          
          {step === 1 ? (
            <>
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChangeText={(text: string) => handleChange('firstName', text)}
                error={errors.firstName}
              />
              
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChangeText={(text: string) => handleChange('lastName', text)}
                error={errors.lastName}
              />
              
              <Input
                placeholder="Email"
                value={formData.email}
                onChangeText={(text: string) => handleChange('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email}
              />
              
              <Input
                placeholder="Password"
                value={formData.password}
                onChangeText={(text: string) => handleChange('password', text)}
                secureTextEntry
                error={errors.password}
              />
              
              <Input
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChangeText={(text: string) => handleChange('confirmPassword', text)}
                secureTextEntry
                error={errors.confirmPassword}
              />
            </>
          ) : (
            <>
              <Input
                placeholder="Country"
                value={formData.country}
                onChangeText={(text: string) => handleChange('country', text)}
                error={errors.country}
              />
              
              <Input
                placeholder="Fluent Languages (comma separated)"
                value={formData.languages}
                onChangeText={(text: string) => handleChange('languages', text)}
                error={errors.languages}
              />
              
              <Input
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChangeText={(text: string) => handleChange('contactNumber', text)}
                keyboardType="phone-pad"
                error={errors.contactNumber}
              />
            </>
          )}
          
          <Button 
            title={step === 1 ? 'Next' : 'Create Account'} 
            onPress={handleNext}
            loading={loading}
            style={styles.button}
          />
          
          {step === 2 && (
            <Button 
              title="Back" 
              onPress={() => setStep(1)}
              variant="outlined"
              style={styles.button}
            />
          )}
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Link href="/login" style={styles.link}>Login</Link>
          </View>
        </BlurContainer>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: COLORS.textSecondary,
  },
  link: {
    color: COLORS.primary,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  error: {
    color: COLORS.error,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default SignupScreen;