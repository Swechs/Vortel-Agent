import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="sectors" options={{ presentation: 'modal' }} />
        <Stack.Screen name="demo-request" options={{ presentation: 'modal' }} />
        <Stack.Screen name="faq" options={{ presentation: 'modal' }} />
        <Stack.Screen name="how-it-works" options={{ presentation: 'modal' }} />
        <Stack.Screen name="dashboard" options={{ presentation: 'modal' }} />
      </Stack>
    </>
  );
}
