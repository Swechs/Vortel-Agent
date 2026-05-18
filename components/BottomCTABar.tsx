import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, BorderRadius, FontSize } from '@/constants/Colors';

interface BottomCTABarProps {
  onPrimary: () => void;
  onSecondary: () => void;
  primaryText?: string;
  secondaryText?: string;
}

export default function BottomCTABar({
  onPrimary, onSecondary,
  primaryText = 'Ücretsiz Demo Al',
  secondaryText = 'WhatsApp ile Yazın',
}: BottomCTABarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrimary} activeOpacity={0.85} style={styles.primaryBtn}>
        <LinearGradient
          colors={Colors.gradientCTA}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.primaryText}>{primaryText}</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSecondary} style={styles.secondaryBtn}>
        <Text style={styles.secondaryText}>💬 {secondaryText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    paddingBottom: Spacing.lg,
    backgroundColor: 'rgba(6,11,24,0.95)',
    borderTopWidth: 1,
    borderTopColor: Colors.cardBorder,
  },
  primaryBtn: { flex: 2 },
  gradient: {
    height: 48,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: { color: '#fff', fontWeight: '700', fontSize: FontSize.md },
  secondaryBtn: {
    flex: 1,
    height: 48,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(37,211,102,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: { color: Colors.whatsapp, fontWeight: '600', fontSize: FontSize.sm },
});
