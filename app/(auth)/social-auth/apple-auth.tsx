import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/ui/Button';
import { COLORS } from '../../../constants/colors';

const AppleAuthScreen = () => {
  const router = useRouter();

  const handleAppleAuth = async () => {
    try {
      // Implement Apple authentication logic here
      // await auth.signInWithApple();
      router.replace('/(main)/home');
    } catch (error) {
      console.error('Apple authentication failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in with Apple</Text>
      <Button 
        title="Continue with Apple" 
        onPress={handleAppleAuth}
        icon="login"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 30,
  },
  button: {
    width: '100%',
  },
});

export default AppleAuthScreen;