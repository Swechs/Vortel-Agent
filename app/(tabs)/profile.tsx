import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import GlassCard from '@/components/GlassCard';
import { Colors, FontSize, Spacing } from '@/constants/Colors';
import { openWhatsApp, openPhone } from '@/utils/linking';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Profil & İletişim</Text>

      {/* Brand */}
      <GlassCard style={styles.brandCard}>
        <Text style={styles.brandIcon}>🎙️</Text>
        <Text style={styles.brandName}>Voxtel Agent</Text>
        <Text style={styles.brandSub}>Yapay Zeka Telefon Asistanı</Text>
      </GlassCard>

      {/* Contact */}
      <Text style={styles.sectionLabel}>İletişim</Text>
      <GlassCard>
        <MenuItem icon="📞" label="Bizi Arayın" onPress={openPhone} />
        <MenuItem icon="💬" label="WhatsApp ile Yazın" onPress={() => openWhatsApp()} />
        <MenuItem icon="📧" label="E-posta Gönderin" onPress={() => Linking.openURL('mailto:info@voxtelagent.com')} />
        <MenuItem icon="🌐" label="Web Sitesi" onPress={() => Linking.openURL('https://voxtelagent.com')} last />
      </GlassCard>

      {/* Social */}
      <Text style={styles.sectionLabel}>Sosyal Medya</Text>
      <GlassCard>
        <MenuItem icon="📸" label="Instagram" onPress={() => Linking.openURL('https://www.instagram.com/voxtel.agent/')} last />
      </GlassCard>

      {/* Settings placeholder */}
      <Text style={styles.sectionLabel}>Ayarlar</Text>
      <GlassCard>
        <MenuItem icon="🔔" label="Bildirim Tercihleri" onPress={() => {}} />
        <MenuItem icon="🌍" label="Dil: Türkçe" onPress={() => {}} />
        <MenuItem icon="📄" label="Gizlilik Politikası" onPress={() => {}} />
        <MenuItem icon="📋" label="Kullanım Koşulları" onPress={() => {}} />
        <MenuItem icon="🛡️" label="KVKK Bilgilendirme" onPress={() => {}} last />
      </GlassCard>

      <Text style={styles.version}>Voxtel Agent v1.0.0</Text>
    </ScrollView>
  );
}

function MenuItem({ icon, label, onPress, last }: { icon: string; label: string; onPress: () => void; last?: boolean }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.menuItem, !last && styles.menuItemBorder]}
      activeOpacity={0.7}
    >
      <Text style={styles.menuIcon}>{icon}</Text>
      <Text style={styles.menuLabel}>{label}</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingHorizontal: Spacing.lg, paddingTop: 60, paddingBottom: 120 },
  title: { color: Colors.textPrimary, fontSize: FontSize.xxl, fontWeight: '800', marginBottom: Spacing.xl },
  brandCard: { alignItems: 'center', marginBottom: Spacing.xl },
  brandIcon: { fontSize: 48, marginBottom: 8 },
  brandName: { color: Colors.textPrimary, fontSize: FontSize.xl, fontWeight: '800', marginBottom: 4 },
  brandSub: { color: Colors.textSecondary, fontSize: FontSize.md },
  sectionLabel: { color: Colors.textMuted, fontSize: FontSize.sm, fontWeight: '600', marginBottom: 8, marginTop: Spacing.md },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  menuItemBorder: { borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' },
  menuIcon: { fontSize: 20, marginRight: 12 },
  menuLabel: { flex: 1, color: Colors.textPrimary, fontSize: FontSize.md },
  menuArrow: { color: Colors.textMuted, fontSize: 20 },
  version: { color: Colors.textMuted, fontSize: FontSize.xs, textAlign: 'center', marginTop: Spacing.xl },
});
