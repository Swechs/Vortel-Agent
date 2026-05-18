import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, FontSize, BorderRadius } from '@/constants/Colors';

interface StepIndicatorProps {
  steps: number;
  current: number;
  labels?: string[];
}

export default function StepIndicator({ steps, current, labels }: StepIndicatorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        {Array.from({ length: steps }).map((_, i) => (
          <View key={i} style={styles.stepRow}>
            <View style={[styles.dot, i <= current && styles.dotActive]}>
              <Text style={[styles.dotText, i <= current && styles.dotTextActive]}>
                {i < current ? '✓' : i + 1}
              </Text>
            </View>
            {i < steps - 1 && (
              <View style={[styles.line, i < current && styles.lineActive]} />
            )}
          </View>
        ))}
      </View>
      {labels && (
        <View style={styles.labels}>
          {labels.map((l, i) => (
            <Text
              key={i}
              style={[styles.label, i <= current && styles.labelActive]}
              numberOfLines={1}
            >
              {l}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: Spacing.lg },
  bar: { flexDirection: 'row', alignItems: 'center' },
  stepRow: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  dot: {
    width: 30, height: 30, borderRadius: 15,
    backgroundColor: Colors.surfaceLight,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: Colors.cardBorder,
  },
  dotActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  dotText: { color: Colors.textMuted, fontSize: FontSize.xs, fontWeight: '600' },
  dotTextActive: { color: '#fff' },
  line: { flex: 1, height: 2, backgroundColor: Colors.surfaceLight, marginHorizontal: 4 },
  lineActive: { backgroundColor: Colors.primary },
  labels: { flexDirection: 'row', marginTop: 6 },
  label: { flex: 1, fontSize: 10, color: Colors.textMuted, textAlign: 'center' },
  labelActive: { color: Colors.primary },
});
