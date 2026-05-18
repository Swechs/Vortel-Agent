import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue, useAnimatedStyle, withRepeat, withTiming, withDelay,
} from 'react-native-reanimated';
import GlassCard from './GlassCard';
import GradientButton from './GradientButton';
import { Colors, FontSize, Spacing, BorderRadius } from '@/constants/Colors';

interface AudioPlayerProps {
  title: string;
  sector: string;
  description: string;
  duration: string;
  isPlaying: boolean;
  onPlay: () => void;
  onFit: () => void;
}

function WaveBar({ index }: { index: number }) {
  const height = useSharedValue(8);

  useEffect(() => {
    height.value = withDelay(
      index * 80,
      withRepeat(
        withTiming(24 + Math.random() * 16, { duration: 400 + Math.random() * 300 }),
        -1,
        true
      )
    );
  }, []);

  const animStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  return <Animated.View style={[styles.bar, animStyle]} />;
}

export default function AudioPlayer({
  title, sector, description, duration, isPlaying, onPlay, onFit,
}: AudioPlayerProps) {
  return (
    <GlassCard style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{sector}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>

      {/* Wave animation */}
      <View style={styles.waveContainer}>
        {isPlaying ? (
          Array.from({ length: 20 }).map((_, i) => <WaveBar key={i} index={i} />)
        ) : (
          Array.from({ length: 20 }).map((_, i) => (
            <View key={i} style={[styles.bar, { height: 6 + (i % 3) * 4, opacity: 0.4 }]} />
          ))
        )}
      </View>

      <View style={styles.controls}>
        <TouchableOpacity onPress={onPlay} style={styles.playBtn}>
          <Text style={styles.playIcon}>{isPlaying ? '⏸' : '▶️'}</Text>
        </TouchableOpacity>
        <Text style={styles.duration}>{duration}</Text>
      </View>

      <View style={styles.actions}>
        <GradientButton title="Bu Agent Bana Uygun" onPress={onFit} size="sm" />
        <GradientButton
          title="İşletmeme Kurdur"
          onPress={onFit}
          variant="outline"
          size="sm"
          style={{ marginTop: Spacing.sm }}
        />
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: Spacing.lg },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(59,130,246,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
    marginBottom: Spacing.sm,
  },
  badgeText: { color: Colors.primary, fontSize: FontSize.xs, fontWeight: '600' },
  title: { color: Colors.textPrimary, fontSize: FontSize.lg, fontWeight: '700', marginBottom: 6 },
  desc: { color: Colors.textSecondary, fontSize: FontSize.sm, lineHeight: 20, marginBottom: Spacing.md },
  waveContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 44,
    gap: 3,
    marginBottom: Spacing.md,
  },
  bar: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    minHeight: 4,
  },
  controls: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, marginBottom: Spacing.md },
  playBtn: {
    width: 48, height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(59,130,246,0.2)',
    alignItems: 'center', justifyContent: 'center',
  },
  playIcon: { fontSize: 20 },
  duration: { color: Colors.textMuted, fontSize: FontSize.sm },
  actions: {},
});
