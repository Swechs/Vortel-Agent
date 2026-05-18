import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import GlassCard from '@/components/GlassCard';
import { Colors, FontSize, Spacing } from '@/constants/Colors';

// Mock dashboard data
const STATS = [
  { label: 'Cevaplanan Arama', value: '342', icon: '📞', color: Colors.primary },
  { label: 'Oluşturulan Randevu', value: '87', icon: '📅', color: Colors.success },
  { label: 'Sıcak Lead', value: '24', icon: '🔥', color: Colors.warning },
  { label: 'Kaçan Arama Oranı', value: '%2.4', icon: '📉', color: Colors.error },
];

const RECENT_CALLS = [
  { name: 'Ahmet Bey', time: '14:32', type: 'Randevu oluşturuldu', status: 'hot' },
  { name: 'Fatma Hanım', time: '13:15', type: 'Fiyat bilgisi verildi', status: 'warm' },
  { name: 'Mehmet Bey', time: '12:48', type: 'İnsan temsilci istedi', status: 'cold' },
  { name: 'Ayşe Hanım', time: '11:22', type: 'Randevu oluşturuldu', status: 'hot' },
];

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>← Geri</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Müşteri Paneli</Text>
      <Text style={styles.sub}>Agent performansınızı takip edin.</Text>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        {STATS.map((s, i) => (
          <GlassCard key={i} style={styles.statCard}>
            <Text style={styles.statIcon}>{s.icon}</Text>
            <Text style={[styles.statValue, { color: s.color }]}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </GlassCard>
        ))}
      </View>

      {/* Recent */}
      <Text style={styles.sectionTitle}>Son Görüşmeler</Text>
      {RECENT_CALLS.map((c, i) => (
        <GlassCard key={i} style={styles.callCard}>
          <View style={styles.callRow}>
            <View style={[styles.callDot, { backgroundColor: c.status === 'hot' ? Colors.success : c.status === 'warm' ? Colors.warning : Colors.textMuted }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.callName}>{c.name}</Text>
              <Text style={styles.callType}>{c.type}</Text>
            </View>
            <Text style={styles.callTime}>{c.time}</Text>
          </View>
        </GlassCard>
      ))}

      {/* Placeholder */}
      <GlassCard style={{ marginTop: Spacing.lg, alignItems: 'center' }}>
        <Text style={styles.placeholderIcon}>📊</Text>
        <Text style={styles.placeholderTitle}>Tam Panel Yakında</Text>
        <Text style={styles.placeholderSub}>Detaylı raporlar, görüşme kayıtları ve müşteri listesi panel güncellemesiyle aktif olacak.</Text>
      </GlassCard>
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
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  statCard: { width: '47%' as any, flexGrow: 1, alignItems: 'center' },
  statIcon: { fontSize: 28, marginBottom: 6 },
  statValue: { fontSize: FontSize.xxl, fontWeight: '900', marginBottom: 2 },
  statLabel: { color: Colors.textSecondary, fontSize: FontSize.xs, textAlign: 'center' },
  sectionTitle: { color: Colors.textPrimary, fontSize: FontSize.lg, fontWeight: '700', marginTop: Spacing.xl, marginBottom: Spacing.md },
  callCard: { marginBottom: Spacing.sm },
  callRow: { flexDirection: 'row', alignItems: 'center' },
  callDot: { width: 10, height: 10, borderRadius: 5, marginRight: 12 },
  callName: { color: Colors.textPrimary, fontSize: FontSize.md, fontWeight: '600' },
  callType: { color: Colors.textSecondary, fontSize: FontSize.sm },
  callTime: { color: Colors.textMuted, fontSize: FontSize.sm },
  placeholderIcon: { fontSize: 40, marginBottom: 8 },
  placeholderTitle: { color: Colors.textPrimary, fontSize: FontSize.lg, fontWeight: '700', marginBottom: 6 },
  placeholderSub: { color: Colors.textSecondary, fontSize: FontSize.sm, textAlign: 'center', lineHeight: 20 },
});
