// app/_layout.jsx
import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Screen0', headerShown: false }} />
      <Stack.Screen name="SigUp_LogIn" options={{ headerShown: false }} />
      <Stack.Screen name="Index" options={{ headerShown: false }} />
    </Stack>

  );
}