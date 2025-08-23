import { Stack } from 'expo-router';
import React from 'react';

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
      <Stack.Screen name="home/components/LocationCategoryCard" options={{ headerShown: false }} />
      <Stack.Screen name="my-trip/index" options={{ headerShown: false }} />
      <Stack.Screen name="my-trip/TripDetails" options={{ headerShown: false }} />
      <Stack.Screen name="profile/index" options={{ headerShown: false }} />
      <Stack.Screen name="profile/edit-profile" options={{ headerShown: false }} />
      <Stack.Screen name="confirmation/index" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/guide-selection/index" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/guide-selection/WithVehicle" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/guide-selection/WithoutVehicle" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/location-selection/index" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/location-selection/LocationCard" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/location-selection/LocationList" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/member-details/index" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/payment/index" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/payment/PaymentSummary" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/vehicle-selection/index" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/vehicle-selection/WithDriver" options={{ headerShown: false }} />
      <Stack.Screen name="trip-planning/vehicle-selection/WithoutDriver" options={{ headerShown: false }} />
    </Stack>
  );
}
