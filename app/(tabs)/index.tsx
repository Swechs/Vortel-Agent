import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import { Colors, FontSize, Spacing, BorderRadius } from '@/constants/Colors';
import { PROBLEMS, HOW_IT_WORKS, SECTORS, FAQ_ITEMS } from '@/constants/Data';
import { openWhatsApp } from '@/utils/linking';

export default function HomeScreen() {
  return (
    <View style={styles.flex}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* ─── HERO ─── */}
        <LinearGradient
          colors={['#0D1425', '#060B18']}
          style={styles.hero}
        >
          <Animated.View entering={FadeInDown.delay(100).duration(600)}>
            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgeText}>🤖 AI Telefon Asistanı</Text>
            </View>
            <Text style={styles.heroTitle}>
              Hiçbir Aramayı{'\n'}Kaçırmayın
            </Text>
            <Text style={styles.heroSub}>
              Yapay zeka telefon asistanınız 7/24 aramaları karşılar,{'\n'}müşterileri nitelendirir, randevu oluşturur.
            </Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.heroCTAs}>
            <GradientButton
              title="Ücretsiz Demo Al"
              onPress={() => router.push('/demo-request')}
              size="lg"
            />
            <GradientButton
              title="🎧  Ses Örneği Dinle"
              onPress={() => router.push('/(tabs)/samples')}
              variant="outline"
              size="lg"
              style={{ marginTop: Spacing.sm }}
            />
          </Animated.View>

          {/* Trust */}
          <View style={styles.trust}>
            <Text style={styles.trustText}>✓ 7/24 Aktif</Text>
            <Text style={styles.trustText}>✓ Türkçe AI</Text>
            <Text style={styles.trustText}>✓ Hızlı Kurulum</Text>
          </View>
        </LinearGradient>

        {/* ─── PROBLEMS ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>İşletmenizin Yaşadığı Sorunlar</Text>
          <Text style={styles.sectionSub}>Tanıdık geliyorsa, çözüm hazır.</Text>
          {PROBLEMS.map((p, i) => (
            <Animated.View key={i} entering={FadeInDown.delay(100 * i).duration(500)}>
              <GlassCard style={styles.problemCard}>
                <Text style={styles.problemIcon}>{p.icon}</Text>
                <View style={styles.problemContent}>
                  <Text style={styles.problemTitle}>{p.title}</Text>
                  <Text style={styles.problemDesc}>{p.desc}</Text>
                </View>
              </GlassCard>
            </Animated.View>
          ))}
        </View>

        {/* ─── HOW IT WORKS ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nasıl Çalışır?</Text>
          <Text style={styles.sectionSub}>4 adımda AI asistanınız hazır.</Text>
          {HOW_IT_WORKS.map((s, i) => (
            <GlassCard key={i} style={styles.stepCard}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumText}>{s.step}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.stepTitle}>{s.title}</Text>
                <Text style={styles.stepDesc}>{s.desc}</Text>
              </View>
            </GlassCard>
          ))}
          <GradientButton
            title="Detaylı Bilgi Al"
            onPress={() => router.push('/how-it-works')}
            variant="outline"
            style={{ marginTop: Spacing.md }}
          />
        </View>

        {/* ─── SECTORS ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hangi Sektördesiniz?</Text>
          <Text style={styles.sectionSub}>Size özel çözümü görün.</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -Spacing.lg }}>
            <View style={styles.sectorRow}>
              {SECTORS.slice(0, 6).map((s, i) => (
                <TouchableOpacity
                  key={s.id}
                  onPress={() => router.push('/sectors')}
                  activeOpacity={0.85}
                  style={styles.sectorChip}
                >
                  <Text style={styles.sectorIcon}>{s.icon}</Text>
                  <Text style={styles.sectorLabel}>{s.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <GradientButton
            title="Tüm Sektörleri Gör"
            onPress={() => router.push('/sectors')}
            variant="outline"
            size="sm"
            style={{ marginTop: Spacing.md }}
          />
        </View>

        {/* ─── SCENARIO PREVIEW ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Örnek Senaryo</Text>
          <GlassCard>
            <Text style={styles.scenarioLabel}>Güzellik Salonu</Text>
            <View style={styles.chatBubble}>
              <Text style={styles.chatRole}>Müşteri:</Text>
              <Text style={styles.chatText}>"Merhaba, yarın öğleden sonra saç boyama için randevu alabilir miyim?"</Text>
            </View>
            <View style={[styles.chatBubble, styles.chatBubbleAgent]}>
              <Text style={[styles.chatRole, { color: Colors.primary }]}>AI Asistan:</Text>
              <Text style={styles.chatText}>"Tabii, yarın saat 14:00 veya 15:30 müsait. Hangi saati tercih edersiniz?"</Text>
            </View>
            <View style={styles.chatBubble}>
              <Text style={styles.chatRole}>Müşteri:</Text>
              <Text style={styles.chatText}>"14:00 olsun lütfen."</Text>
            </View>
            <View style={[styles.chatBubble, styles.chatBubbleAgent]}>
              <Text style={[styles.chatRole, { color: Colors.primary }]}>AI Asistan:</Text>
              <Text style={styles.chatText}>"Randevunuz oluşturuldu. WhatsApp üzerinden adres ve detay bilgisi gönderilecek. İyi günler!"</Text>
            </View>
          </GlassCard>
        </View>

        {/* ─── TRUST ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Neden Voxtel Agent?</Text>
          <View style={styles.trustGrid}>
            {[
              { icon: '⚡', text: '3-5 günde kurulum' },
              { icon: '🔒', text: 'KVKK uyumlu veri saklama' },
              { icon: '🇹🇷', text: 'Türkçe doğal konuşma' },
              { icon: '📊', text: 'Detaylı raporlama' },
              { icon: '🔗', text: 'CRM ve takvim entegrasyonu' },
              { icon: '💬', text: 'WhatsApp takip mesajları' },
            ].map((t, i) => (
              <GlassCard key={i} style={styles.trustCard}>
                <Text style={styles.trustIcon}>{t.icon}</Text>
                <Text style={styles.trustCardText}>{t.text}</Text>
              </GlassCard>
            ))}
          </View>
        </View>

        {/* ─── FAQ PREVIEW ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sık Sorulan Sorular</Text>
          {FAQ_ITEMS.slice(0, 3).map((f, i) => (
            <GlassCard key={i} style={{ marginBottom: Spacing.sm }}>
              <Text style={styles.faqQ}>{f.q}</Text>
              <Text style={styles.faqA}>{f.a}</Text>
            </GlassCard>
          ))}
          <GradientButton
            title="Tüm Sorular"
            onPress={() => router.push('/faq')}
            variant="outline"
            size="sm"
            style={{ marginTop: Spacing.sm }}
          />
        </View>

        {/* ─── BOTTOM CTA ─── */}
        <View style={[styles.section, { marginBottom: 120 }]}>
          <GlassCard style={{ alignItems: 'center' }}>
            <Text style={styles.ctaTitle}>Hazır mısınız?</Text>
            <Text style={styles.ctaSub}>İşletmenize özel AI asistan kuralım.</Text>
            <GradientButton
              title="Ücretsiz Demo Al"
              onPress={() => router.push('/demo-request')}
              size="lg"
              style={{ width: '100%', marginTop: Spacing.md }}
            />
            <GradientButton
              title="💬  WhatsApp ile Yazın"
              onPress={() => openWhatsApp()}
              variant="whatsapp"
              style={{ width: '100%', marginTop: Spacing.sm }}
            />
          </GlassCard>
        </View>
      </ScrollView>

      {/* Sticky Bottom Bar */}
      <View style={styles.stickyBar}>
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/quote')}
          activeOpacity={0.85}
          style={styles.stickyPrimary}
        >
          <LinearGradient
            colors={Colors.gradientCTA}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.stickyGradient}
          >
            <Text style={styles.stickyPrimaryText}>Teklif Al</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openWhatsApp()}
          style={styles.stickyWA}
        >
          <Text style={styles.stickyWAText}>💬</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingBottom: 0 },
  // Hero
  hero: { paddingHorizontal: Spacing.lg, paddingTop: 60, paddingBottom: Spacing.xxl },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(59,130,246,0.12)',
    paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: BorderRadius.full, marginBottom: Spacing.md,
  },
  heroBadgeText: { color: Colors.primary, fontSize: FontSize.sm, fontWeight: '600' },
  heroTitle: { color: Colors.white, fontSize: FontSize.hero, fontWeight: '900', lineHeight: 42, marginBottom: Spacing.md },
  heroSub: { color: Colors.textSecondary, fontSize: FontSize.md, lineHeight: 24 },
  heroCTAs: { marginTop: Spacing.xl },
  trust: { flexDirection: 'row', justifyContent: 'space-around', marginTop: Spacing.xl },
  trustText: { color: Colors.textMuted, fontSize: FontSize.xs },
  // Sections
  section: { paddingHorizontal: Spacing.lg, marginTop: Spacing.xxl },
  sectionTitle: { color: Colors.textPrimary, fontSize: FontSize.xl, fontWeight: '800', marginBottom: 6 },
  sectionSub: { color: Colors.textSecondary, fontSize: FontSize.sm, marginBottom: Spacing.lg },
  // Problems
  problemCard: { flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.sm },
  problemIcon: { fontSize: 28, marginRight: Spacing.md },
  problemContent: { flex: 1 },
  problemTitle: { color: Colors.textPrimary, fontSize: FontSize.md, fontWeight: '700', marginBottom: 2 },
  problemDesc: { color: Colors.textSecondary, fontSize: FontSize.sm },
  // Steps
  stepCard: { flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.sm },
  stepNumber: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(59,130,246,0.15)',
    alignItems: 'center', justifyContent: 'center', marginRight: Spacing.md,
  },
  stepNumText: { color: Colors.primary, fontWeight: '800', fontSize: FontSize.md },
  stepTitle: { color: Colors.textPrimary, fontSize: FontSize.md, fontWeight: '700', marginBottom: 2 },
  stepDesc: { color: Colors.textSecondary, fontSize: FontSize.sm },
  // Sectors
  sectorRow: { flexDirection: 'row', paddingHorizontal: Spacing.lg, gap: Spacing.sm },
  sectorChip: {
    backgroundColor: Colors.card,
    borderRadius: BorderRadius.lg,
    borderWidth: 1, borderColor: Colors.cardBorder,
    padding: Spacing.md, alignItems: 'center', width: 110,
  },
  sectorIcon: { fontSize: 28, marginBottom: 6 },
  sectorLabel: { color: Colors.textPrimary, fontSize: FontSize.xs, fontWeight: '600', textAlign: 'center' },
  // Scenario
  scenarioLabel: { color: Colors.primary, fontSize: FontSize.sm, fontWeight: '600', marginBottom: Spacing.md },
  chatBubble: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: Spacing.md, borderRadius: BorderRadius.md, marginBottom: Spacing.sm,
  },
  chatBubbleAgent: { backgroundColor: 'rgba(59,130,246,0.08)' },
  chatRole: { color: Colors.textMuted, fontSize: FontSize.xs, fontWeight: '600', marginBottom: 4 },
  chatText: { color: Colors.textSecondary, fontSize: FontSize.sm, lineHeight: 20 },
  // Trust Grid
  trustGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  trustCard: { width: '48%' as any, flexGrow: 1, alignItems: 'center' },
  trustIcon: { fontSize: 28, marginBottom: 6 },
  trustCardText: { color: Colors.textSecondary, fontSize: FontSize.sm, textAlign: 'center' },
  // FAQ
  faqQ: { color: Colors.textPrimary, fontSize: FontSize.md, fontWeight: '700', marginBottom: 6 },
  faqA: { color: Colors.textSecondary, fontSize: FontSize.sm, lineHeight: 20 },
  // Bottom CTA
  ctaTitle: { color: Colors.textPrimary, fontSize: FontSize.xl, fontWeight: '800', marginBottom: 6 },
  ctaSub: { color: Colors.textSecondary, fontSize: FontSize.md },
  // Sticky bar
  stickyBar: {
    position: 'absolute', bottom: 70, left: 0, right: 0,
    flexDirection: 'row', gap: Spacing.sm,
    paddingHorizontal: Spacing.md, paddingVertical: 8,
    backgroundColor: 'rgba(6,11,24,0.95)',
    borderTopWidth: 1, borderTopColor: Colors.cardBorder,
  },
  stickyPrimary: { flex: 1 },
  stickyGradient: { height: 44, borderRadius: BorderRadius.md, alignItems: 'center', justifyContent: 'center' },
  stickyPrimaryText: { color: '#fff', fontWeight: '700', fontSize: FontSize.md },
  stickyWA: {
    width: 44, height: 44, borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(37,211,102,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },
  stickyWAText: { fontSize: 20 },
});
