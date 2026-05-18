import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import GlassCard from '@/components/GlassCard';
import { Colors, FontSize, Spacing } from '@/constants/Colors';
import { FAQ_ITEMS } from '@/constants/Data';

export default function FAQScreen() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>← Geri</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Sık Sorulan Sorular</Text>
      <Text style={styles.sub}>Merak ettikleriniz hakkında bilgi alın.</Text>

      {FAQ_ITEMS.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => setOpen(open === i ? null : i)} activeOpacity={0.85}>
          <GlassCard style={styles.faqCard}>
            <View style={styles.qRow}>
              <Text style={styles.question}>{item.q}</Text>
              <Text style={styles.arrow}>{open === i ? '−' : '+'}</Text>
            </View>
            {open === i && (
              <Text style={styles.answer}>{item.a}</Text>
            )}
          </GlassCard>
        </TouchableOpacity>
      ))}
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
  faqCard: { marginBottom: Spacing.sm },
  qRow: { flexDirection: 'row', alignItems: 'center' },
  question: { flex: 1, color: Colors.textPrimary, fontSize: FontSize.md, fontWeight: '600' },
  arrow: { color: Colors.primary, fontSize: 22, fontWeight: '700', marginLeft: 8 },
  answer: { color: Colors.textSecondary, fontSize: FontSize.sm, lineHeight: 20, marginTop: Spacing.sm },
});
