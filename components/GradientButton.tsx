import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, BorderRadius, FontSize, Spacing } from '@/constants/Colors';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  colors?: readonly [string, string, ...string[]];
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
  icon?: string;
  variant?: 'primary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
}

export default function GradientButton({
  title, onPress, colors, style, textStyle, loading, icon, variant = 'primary', size = 'md',
}: GradientButtonProps) {
  const h = size === 'sm' ? 40 : size === 'lg' ? 60 : 52;
  const fs = size === 'sm' ? FontSize.sm : size === 'lg' ? FontSize.lg : FontSize.md;

  if (variant === 'outline') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.outline, { height: h }, style]}
      >
        <Text style={[styles.outlineText, { fontSize: fs }, textStyle]}>
          {icon ? `${icon}  ${title}` : title}
        </Text>
      </TouchableOpacity>
    );
  }

  const gradientColors = variant === 'whatsapp'
    ? ['#25D366', '#128C7E'] as const
    : (colors ?? Colors.gradientCTA);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={style}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradient, { height: h }]}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={[styles.text, { fontSize: fs }, textStyle]}>
            {icon ? `${icon}  ${title}` : title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
  },
  text: {
    color: Colors.white,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  outline: {
    borderRadius: BorderRadius.lg,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
  },
  outlineText: {
    color: Colors.primary,
    fontWeight: '600',
  },
});
