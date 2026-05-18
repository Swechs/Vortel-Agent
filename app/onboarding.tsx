import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Colors, FontSize, Spacing, BorderRadius } from '@/constants/Colors';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    icon: '📞',
    title: 'Aramalar Artık Kaçmıyor',
    desc: 'Yapay zeka telefon asistanınız 7/24 tüm aramaları karşılar. Bir müşterinizi bile kaçırmayın.',
  },
  {
    icon: '🤖',
    title: 'AI Asistan Müşteriyi Anlar',
    desc: 'Müşterinizin ihtiyacını anlar, bilgi verir, yönlendirir ve randevu oluşturur.',
  },
  {
    icon: '🎯',
    title: 'Sadece Sıcak Müşterilerle Görüşün',
    desc: 'Satış ekibiniz nitelikli müşterilerle ilgilenir. Soğuk aramalar AI\'ya kalsın.',
  },
];

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      router.replace('/(tabs)');
    }
  };

  const skip = () => router.replace('/(tabs)');

  return (
    <LinearGradient colors={['#060B18', '#0D1425']} style={styles.container}>
      <TouchableOpacity onPress={skip} style={styles.skip}>
        <Text style={styles.skipText}>Atla</Text>
      </TouchableOpacity>

      <Animated.View key={step} entering={FadeIn.duration(400)} style={styles.content}>
        <Text style={styles.icon}>{SLIDES[step].icon}</Text>
        <Text style={styles.title}>{SLIDES[step].title}</Text>
        <Text style={styles.desc}>{SLIDES[step].desc}</Text>
      </Animated.View>

      {/* Dots */}
      <View style={styles.dots}>
        {SLIDES.map((_, i) => (
          <View key={i} style={[styles.dot, i === step && styles.dotActive]} />
        ))}
      </View>

      <TouchableOpacity onPress={next} activeOpacity={0.85} style={styles.nextBtn}>
        <LinearGradient
          colors={Colors.gradientCTA}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.nextGrad}
        >
          <Text style={styles.nextText}>
            {step === 2 ? 'Başlayın' : 'Devam'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: 60 },
  skip: { alignSelf: 'flex-end', padding: Spacing.sm },
  skipText: { color: Colors.textMuted, fontSize: FontSize.md },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: Spacing.md },
  icon: { fontSize: 64, marginBottom: Spacing.xl },
  title: {
    color: Colors.textPrimary, fontSize: FontSize.xxl, fontWeight: '800',
    textAlign: 'center', marginBottom: Spacing.md,
  },
  desc: {
    color: Colors.textSecondary, fontSize: FontSize.md,
    textAlign: 'center', lineHeight: 24,
  },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: Spacing.xl },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.surfaceLight },
  dotActive: { width: 24, backgroundColor: Colors.primary },
  nextBtn: { marginBottom: 40 },
  nextGrad: {
    height: 56, borderRadius: BorderRadius.lg,
    alignItems: 'center', justifyContent: 'center',
  },
  nextText: { color: '#fff', fontSize: FontSize.lg, fontWeight: '700' },
});
