import * as Google from 'expo-auth-session/providers/google';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/ui/Button';
import { COLORS } from '../../../constants/colors';

WebBrowser.maybeCompleteAuthSession();

const GoogleAuthScreen = () => {
  const router = useRouter();
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: 'YOUR_EXPO_CLIENT_ID',
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      // Handle the authentication token
      // await auth.signInWithGoogle(authentication.accessToken);
      router.replace('/(main)/home');
    }
  }, [response, router]);

  const handleGoogleAuth = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Google authentication failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in with Google</Text>
      <Button 
        title="Continue with Google" 
        onPress={handleGoogleAuth}
        disabled={!request}
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

export default GoogleAuthScreen;