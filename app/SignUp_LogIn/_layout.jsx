import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="logIn" options={{title: 'LogIn', headerShown: false }} />
      <Stack.Screen name="signUp" options={{title: 'SignUp', headerShown: false }} />
    </Stack>

  );
}