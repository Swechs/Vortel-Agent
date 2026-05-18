import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import SectorCard from '@/components/SectorCard';
import { Colors, FontSize, Spacing } from '@/constants/Colors';
import { SECTORS } from '@/constants/Data';

export default function SectorsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>← Geri</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Sektörler</Text>
      <Text style={styles.sub}>İşletmenizin sektörünü seçin, size özel çözümü görün.</Text>

      {SECTORS.map((s) => (
        <SectorCard
          key={s.id}
          icon={s.icon}
          title={s.title}
          problem={s.problem}
          solution={s.solution}
          onPress={() => router.push('/(tabs)/quote')}
        />
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
});
