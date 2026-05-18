import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Colors, FontSize } from '@/constants/Colors';

export default function SplashScreen() {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const sloganOpacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 800 });
    scale.value = withTiming(1, { duration: 800 });
    sloganOpacity.value = withDelay(600, withTiming(1, { duration: 600 }));

    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const sloganStyle = useAnimatedStyle(() => ({
    opacity: sloganOpacity.value,
  }));

  return (
    <LinearGradient colors={['#060B18', '#0D1425', '#060B18']} style={styles.container}>
      <Animated.View style={[styles.logoBox, logoStyle]}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoIcon}>🎙️</Text>
        </View>
        <Text style={styles.brand}>Voxtel Agent</Text>
      </Animated.View>
      <Animated.Text style={[styles.slogan, sloganStyle]}>
        Yapay Zeka Telefon Asistanınız
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logoBox: { alignItems: 'center' },
  logoCircle: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: 'rgba(59,130,246,0.15)',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: 'rgba(59,130,246,0.3)',
    marginBottom: 16,
  },
  logoIcon: { fontSize: 36 },
  brand: { color: Colors.white, fontSize: 32, fontWeight: '800', letterSpacing: 1 },
  slogan: { color: Colors.textSecondary, fontSize: FontSize.md, marginTop: 12 },
});
