import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import { Colors, FontSize, Spacing } from '@/constants/Colors';
import { HOW_IT_WORKS } from '@/constants/Data';

export default function HowItWorksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>← Geri</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Nasıl Çalışır?</Text>
      <Text style={styles.sub}>4 basit adımda AI telefon asistanınız hazır.</Text>

      {HOW_IT_WORKS.map((s, i) => (
        <View key={i} style={styles.stepWrap}>
          <View style={styles.timeline}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{s.step}</Text>
            </View>
            {i < HOW_IT_WORKS.length - 1 && <View style={styles.line} />}
          </View>
          <GlassCard style={styles.stepCard}>
            <Text style={styles.stepTitle}>{s.title}</Text>
            <Text style={styles.stepDesc}>{s.desc}</Text>
          </GlassCard>
        </View>
      ))}

      <GradientButton
        title="Hemen Başlayın"
        onPress={() => router.push('/(tabs)/quote')}
        size="lg"
        style={{ marginTop: Spacing.xl }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingHorizontal: Spacing.lg, paddingTop: 60, paddingBottom: 40 },
  back: { marginBottom: Spacing.md },
  backText: { color: Colors.primary, fontSize: FontSize.md },
  title: { color: Colors.textPrimary, fontSize: FontSize.xxl, fontWeight: '800', marginBottom: 6 },
  sub: { color: Colors.textSecondary, fontSize: FontSize.md, marginBottom: Spacing.xl },
  stepWrap: { flexDirection: 'row', marginBottom: 0 },
  timeline: { alignItems: 'center', marginRight: Spacing.md, width: 36 },
  circle: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(59,130,246,0.2)',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: Colors.primary,
  },
  circleText: { color: Colors.primary, fontWeight: '800', fontSize: FontSize.md },
  line: { width: 2, flex: 1, backgroundColor: 'rgba(59,130,246,0.2)' },
  stepCard: { flex: 1, marginBottom: Spacing.md },
  stepTitle: { color: Colors.textPrimary, fontSize: FontSize.lg, fontWeight: '700', marginBottom: 6 },
  stepDesc: { color: Colors.textSecondary, fontSize: FontSize.sm, lineHeight: 20 },
});
