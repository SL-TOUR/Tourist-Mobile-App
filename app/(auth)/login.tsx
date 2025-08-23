import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import BlurContainer from '../../components/ui/BlurContainer';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { COLORS } from '../../constants/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      // Implement your login logic here
      router.replace('/(main)/home');
    } catch {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/auth/background.jpg')} 
      style={styles.background}
      blurRadius={5}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <BlurContainer>
          <Text style={styles.title}>SL Tour</Text>
          
          {error ? <Text style={styles.error}>{error}</Text> : null}
          
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry
          />
          
          <Button 
            title="Login" 
            onPress={handleLogin} 
            loading={loading}
            style={styles.button}
          />
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don&apos;t have an account?</Text>
            <Link href="/signup" style={styles.link}>Sign Up</Link>
          </View>
          
          <View style={styles.socialContainer}>
            <Text style={styles.socialText}>Or continue with</Text>
            <View style={styles.socialButtons}>
              <Button 
                title="Google" 
                onPress={() => router.push('/social-auth/google-auth')}
                variant="outlined"
                icon="login"
              />
            </View>
          </View>
        </BlurContainer>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
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
  socialContainer: {
    marginTop: 30,
  },
  socialText: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    marginBottom: 10,
  },
  socialButtons: {
    gap: 10,
  },
  error: {
    color: COLORS.error,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LoginScreen;