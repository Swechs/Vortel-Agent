import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import GlassCard from './GlassCard';
import { Colors, FontSize, Spacing, BorderRadius } from '@/constants/Colors';

interface SectorCardProps {
  icon: string;
  title: string;
  problem: string;
  solution: string;
  onPress: () => void;
}

export default function SectorCard({ icon, title, problem, solution, onPress }: SectorCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <GlassCard style={styles.card}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.divider} />
        <Text style={styles.label}>Problem:</Text>
        <Text style={styles.text}>{problem}</Text>
        <Text style={[styles.label, { marginTop: 8 }]}>Çözüm:</Text>
        <Text style={styles.text}>{solution}</Text>
        <View style={styles.cta}>
          <Text style={styles.ctaText}>Teklif Al →</Text>
        </View>
      </GlassCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: Spacing.md },
  icon: { fontSize: 32, marginBottom: Spacing.sm },
  title: { color: Colors.textPrimary, fontSize: FontSize.lg, fontWeight: '700', marginBottom: Spacing.sm },
  divider: { height: 1, backgroundColor: Colors.cardBorder, marginBottom: Spacing.sm },
  label: { color: Colors.primary, fontSize: FontSize.xs, fontWeight: '600', marginBottom: 2 },
  text: { color: Colors.textSecondary, fontSize: FontSize.sm, lineHeight: 20 },
  cta: {
    marginTop: Spacing.md,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(59,130,246,0.12)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BorderRadius.full,
  },
  ctaText: { color: Colors.primary, fontSize: FontSize.sm, fontWeight: '600' },
});
