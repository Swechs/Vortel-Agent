import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import { Colors, FontSize, Spacing, BorderRadius } from '@/constants/Colors';
import { MEETING_TYPES } from '@/constants/Data';
import { openWhatsApp } from '@/utils/linking';

const DAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
const HOURS = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

export default function AppointmentScreen() {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [note, setNote] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const confirm = () => {
    if (!selectedDay || !selectedHour || !meetingType) {
      Alert.alert('Eksik Bilgi', 'Lütfen gün, saat ve görüşme tipini seçin.');
      return;
    }
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', paddingHorizontal: Spacing.lg }]}>
        <Text style={{ fontSize: 64, marginBottom: Spacing.lg }}>✅</Text>
        <Text style={styles.confirmTitle}>Görüşmeniz Planlandı!</Text>
        <Text style={styles.confirmSub}>
          {selectedDay}, saat {selectedHour}{'\n'}
          {MEETING_TYPES.find(m => m.id === meetingType)?.label}
        </Text>
        <Text style={styles.confirmNote}>
          Görüşme detayları WhatsApp ve e-posta ile gönderilecektir.{'\n'}Hatırlatma mesajı alacaksınız.
        </Text>
        <GradientButton
          title="Ana Sayfaya Dön"
          onPress={() => { setConfirmed(false); setSelectedDay(''); setSelectedHour(''); }}
          variant="outline"
          style={{ marginTop: Spacing.xl }}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Görüşme Ayarla</Text>
      <Text style={styles.sub}>Size uygun gün ve saati seçin, görüşme türünü belirleyin.</Text>

      {/* Day */}
      <GlassCard>
        <Text style={styles.label}>Gün Seçin</Text>
        <View style={styles.grid}>
          {DAYS.map(d => (
            <TouchableOpacity
              key={d}
              onPress={() => setSelectedDay(d)}
              style={[styles.dayBtn, selectedDay === d && styles.dayBtnActive]}
            >
              <Text style={[styles.dayText, selectedDay === d && styles.dayTextActive]}>{d}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </GlassCard>

      {/* Hour */}
      <GlassCard style={{ marginTop: Spacing.md }}>
        <Text style={styles.label}>Saat Seçin</Text>
        <View style={styles.hourGrid}>
          {HOURS.map(h => (
            <TouchableOpacity
              key={h}
              onPress={() => setSelectedHour(h)}
              style={[styles.hourBtn, selectedHour === h && styles.hourBtnActive]}
            >
              <Text style={[styles.hourText, selectedHour === h && styles.hourTextActive]}>{h}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </GlassCard>

      {/* Meeting Type */}
      <GlassCard style={{ marginTop: Spacing.md }}>
        <Text style={styles.label}>Görüşme Tipi</Text>
        {MEETING_TYPES.map(m => (
          <TouchableOpacity
            key={m.id}
            onPress={() => setMeetingType(m.id)}
            style={[styles.typeBtn, meetingType === m.id && styles.typeBtnActive]}
          >
            <Text style={styles.typeIcon}>{m.icon}</Text>
            <Text style={[styles.typeLabel, meetingType === m.id && styles.typeLabelActive]}>
              {m.label}
            </Text>
          </TouchableOpacity>
        ))}
      </GlassCard>

      {/* Note */}
      <GlassCard style={{ marginTop: Spacing.md }}>
        <Text style={styles.label}>Not (Opsiyonel)</Text>
        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Görüşmede konuşmak istediğiniz konuları yazabilirsiniz..."
          placeholderTextColor={Colors.textMuted}
          multiline
          style={styles.noteInput}
        />
      </GlassCard>

      <GradientButton
        title="Görüşmeyi Onayla"
        onPress={confirm}
        size="lg"
        style={{ marginTop: Spacing.xl }}
      />
      <GradientButton
        title="💬  WhatsApp ile İletişime Geç"
        onPress={() => openWhatsApp()}
        variant="whatsapp"
        style={{ marginTop: Spacing.sm, marginBottom: 120 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingHorizontal: Spacing.lg, paddingTop: 60, paddingBottom: 40 },
  title: { color: Colors.textPrimary, fontSize: FontSize.xxl, fontWeight: '800', marginBottom: 6 },
  sub: { color: Colors.textSecondary, fontSize: FontSize.md, marginBottom: Spacing.xl },
  label: { color: Colors.textPrimary, fontSize: FontSize.md, fontWeight: '700', marginBottom: Spacing.md },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  dayBtn: {
    paddingHorizontal: 16, paddingVertical: 10,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surfaceLight,
    borderWidth: 1, borderColor: Colors.cardBorder,
  },
  dayBtnActive: { backgroundColor: 'rgba(59,130,246,0.15)', borderColor: Colors.primary },
  dayText: { color: Colors.textSecondary, fontSize: FontSize.sm },
  dayTextActive: { color: Colors.primary, fontWeight: '600' },
  hourGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  hourBtn: {
    width: 70, paddingVertical: 10, alignItems: 'center',
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surfaceLight,
    borderWidth: 1, borderColor: Colors.cardBorder,
  },
  hourBtnActive: { backgroundColor: 'rgba(59,130,246,0.15)', borderColor: Colors.primary },
  hourText: { color: Colors.textSecondary, fontSize: FontSize.sm },
  hourTextActive: { color: Colors.primary, fontWeight: '600' },
  typeBtn: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  typeBtnActive: {},
  typeIcon: { fontSize: 24, marginRight: 12 },
  typeLabel: { color: Colors.textSecondary, fontSize: FontSize.md },
  typeLabelActive: { color: Colors.primary, fontWeight: '600' },
  noteInput: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: BorderRadius.md,
    borderWidth: 1, borderColor: Colors.cardBorder,
    color: Colors.textPrimary, fontSize: FontSize.md,
    padding: Spacing.md, height: 100, textAlignVertical: 'top',
  },
  confirmTitle: { color: Colors.textPrimary, fontSize: FontSize.xxl, fontWeight: '800', marginBottom: 8, textAlign: 'center' },
  confirmSub: { color: Colors.primary, fontSize: FontSize.lg, fontWeight: '600', textAlign: 'center', lineHeight: 26 },
  confirmNote: { color: Colors.textSecondary, fontSize: FontSize.md, textAlign: 'center', marginTop: Spacing.md, lineHeight: 22 },
});
