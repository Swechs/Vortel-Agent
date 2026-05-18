import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import AudioPlayer from '@/components/AudioPlayer';
import GradientButton from '@/components/GradientButton';
import { Colors, FontSize, Spacing } from '@/constants/Colors';
import { AUDIO_SAMPLES } from '@/constants/Data';
import { openWhatsApp } from '@/utils/linking';

export default function SamplesScreen() {
  const [playing, setPlaying] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlaying(playing === id ? null : id);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Ses Örnekleri</Text>
        <Text style={styles.sub}>
          AI asistanın gerçek görüşme senaryolarını dinleyin.
        </Text>
      </View>

      {AUDIO_SAMPLES.map((sample) => (
        <AudioPlayer
          key={sample.id}
          title={sample.title}
          sector={sample.sector}
          description={sample.description}
          duration={sample.duration}
          isPlaying={playing === sample.id}
          onPlay={() => togglePlay(sample.id)}
          onFit={() => router.push('/(tabs)/quote')}
        />
      ))}

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          İşletmenize özel ses ve senaryo oluşturmak ister misiniz?
        </Text>
        <GradientButton
          title="Demo Talep Et"
          onPress={() => router.push('/demo-request')}
          style={{ marginTop: Spacing.md }}
        />
        <GradientButton
          title="💬  WhatsApp ile Sorun"
          onPress={() => openWhatsApp()}
          variant="whatsapp"
          style={{ marginTop: Spacing.sm }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingHorizontal: Spacing.lg, paddingTop: 60, paddingBottom: 100 },
  header: { marginBottom: Spacing.xl },
  title: { color: Colors.textPrimary, fontSize: FontSize.xxl, fontWeight: '800', marginBottom: 6 },
  sub: { color: Colors.textSecondary, fontSize: FontSize.md },
  bottom: { marginTop: Spacing.xl, alignItems: 'center' },
  bottomText: { color: Colors.textSecondary, fontSize: FontSize.md, textAlign: 'center' },
});
