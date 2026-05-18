import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import { Colors, FontSize, Spacing, BorderRadius } from '@/constants/Colors';
import { SECTORS } from '@/constants/Data';
import { openWhatsApp } from '@/utils/linking';

const VOICE_OPTIONS = ['Kadın sesi', 'Erkek sesi', 'Doğal kurumsal ses'];
const LANG_OPTIONS = ['Türkçe', 'İngilizce', 'Türkçe + İngilizce'];

export default function DemoRequestScreen() {
  const [sector, setSector] = useState('');
  const [language, setLanguage] = useState('Türkçe');
  const [voice, setVoice] = useState('');
  const [greeting, setGreeting] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', paddingHorizontal: Spacing.lg }]}>
        <Text style={{ fontSize: 64, marginBottom: Spacing.lg }}>🎤</Text>
        <Text style={styles.confirmTitle}>Demo Talebiniz Alındı!</Text>
        <Text style={styles.confirmSub}>
          İşletmenize özel demo agent hazırlanıyor.{'\n'}En kısa sürede sizinle iletişime geçeceğiz.
        </Text>
        <GradientButton
          title="💬  WhatsApp ile Takip Et"
          onPress={() => openWhatsApp('Merhaba, demo talebimi gönderdim. Bilgi almak istiyorum.')}
          variant="whatsapp"
          size="lg"
          style={{ width: '100%', marginTop: Spacing.xl }}
        />
        <GradientButton
          title="Ana Sayfaya Dön"
          onPress={() => { setSubmitted(false); router.back(); }}
          variant="outline"
          style={{ width: '100%', marginTop: Spacing.sm }}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>← Geri</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Demo Talep Et</Text>
      <Text style={styles.sub}>İşletmenize özel AI asistan demosu oluşturalım.</Text>

      <GlassCard>
        <Text style={styles.label}>Hangi sektörde demo istiyorsunuz?</Text>
        <View style={styles.chipWrap}>
          {SECTORS.slice(0, 6).map(s => (
            <TouchableOpacity
              key={s.id}
              onPress={() => setSector(s.id)}
              style={[styles.chip, sector === s.id && styles.chipActive]}
            >
              <Text style={[styles.chipText, sector === s.id && styles.chipTextActive]}>
                {s.icon} {s.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Demo agent hangi dili konuşsun?</Text>
        <View style={styles.chipWrap}>
          {LANG_OPTIONS.map(l => (
            <TouchableOpacity
              key={l}
              onPress={() => setLanguage(l)}
              style={[styles.chip, language === l && styles.chipActive]}
            >
              <Text style={[styles.chipText, language === l && styles.chipTextActive]}>{l}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Ses tercihi</Text>
        <View style={styles.chipWrap}>
          {VOICE_OPTIONS.map(v => (
            <TouchableOpacity
              key={v}
              onPress={() => setVoice(v)}
              style={[styles.chip, voice === v && styles.chipActive]}
            >
              <Text style={[styles.chipText, voice === v && styles.chipTextActive]}>{v}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Agent müşteriyi nasıl karşılasın?</Text>
        <TextInput
          value={greeting}
          onChangeText={setGreeting}
          placeholder="Örn: Merhaba, Salon Bella'ya hoş geldiniz. Size nasıl yardımcı olabilirim?"
          placeholderTextColor={Colors.textMuted}
          multiline
          style={styles.textInput}
        />
      </GlassCard>

      <GradientButton
        title="Demo Talebini Gönder"
        onPress={() => setSubmitted(true)}
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
  label: { color: Colors.textPrimary, fontSize: FontSize.md, fontWeight: '600', marginBottom: 8, marginTop: Spacing.md },
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.surfaceLight,
    borderWidth: 1, borderColor: Colors.cardBorder,
  },
  chipActive: { backgroundColor: 'rgba(59,130,246,0.15)', borderColor: Colors.primary },
  chipText: { color: Colors.textSecondary, fontSize: FontSize.sm },
  chipTextActive: { color: Colors.primary, fontWeight: '600' },
  textInput: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: BorderRadius.md,
    borderWidth: 1, borderColor: Colors.cardBorder,
    color: Colors.textPrimary, fontSize: FontSize.md,
    padding: Spacing.md, height: 90, textAlignVertical: 'top',
  },
  confirmTitle: { color: Colors.textPrimary, fontSize: FontSize.xxl, fontWeight: '800', marginBottom: 8, textAlign: 'center' },
  confirmSub: { color: Colors.textSecondary, fontSize: FontSize.md, textAlign: 'center', lineHeight: 24 },
});
