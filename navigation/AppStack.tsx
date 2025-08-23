// If you haven't already, install @react-navigation/stack:
// npx expo install @react-navigation/stack
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ConfirmationScreen from '../app/(main)/confirmation';
import HomeScreen from '../app/(main)/home';
import MyTripScreen from '../app/(main)/my-trip';
import ProfileScreen from '../app/(main)/profile';
import EditProfileScreen from '../app/(main)/profile/edit-profile';
import GuideSelectionScreen from '../app/(main)/trip-planning/guide-selection';
import LocationSelectionScreen from '../app/(main)/trip-planning/location-selection';
import MemberDetailsScreen from '../app/(main)/trip-planning/member-details';
import PaymentScreen from '../app/(main)/trip-planning/payment';
import VehicleSelectionScreen from '../app/(main)/trip-planning/vehicle-selection';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LocationSelection" component={LocationSelectionScreen} />
      <Stack.Screen name="MemberDetails" component={MemberDetailsScreen} />
      <Stack.Screen name="VehicleSelection" component={VehicleSelectionScreen} />
      <Stack.Screen name="GuideSelection" component={GuideSelectionScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="MyTrip" component={MyTripScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;