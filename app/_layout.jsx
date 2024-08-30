// app/_layout.jsx
import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Screen0', headerShown: false }} />
      <Stack.Screen name="SigUp_LogIn/signUp" options={{ title: 'Sign Up', headerShown: false }} />
    </Stack>

  );
}