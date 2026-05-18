import React, { useState } from 'react';
import {
  ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,
} from 'react-native';
import { router } from 'expo-router';
import StepIndicator from '@/components/StepIndicator';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import { Colors, FontSize, Spacing, BorderRadius } from '@/constants/Colors';
import { SECTORS, AGENT_TASKS, INTEGRATIONS, CALL_VOLUME_OPTIONS } from '@/constants/Data';
import { openWhatsApp } from '@/utils/linking';

const STEP_LABELS = ['İşletme', 'Çağrı', 'Görev', 'Entegrasyon', 'Sonuç'];

export default function QuoteScreen() {
  const [step, setStep] = useState(0);

  // Step 1
  const [bizName, setBizName] = useState('');
  const [sector, setSector] = useState('');
  const [city, setCity] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Step 2
  const [callVolume, setCallVolume] = useState('');
  const [staffCount, setStaffCount] = useState('');
  const [topQuestions, setTopQuestions] = useState('');
  const [salesPercent, setSalesPercent] = useState('');

  // Step 3
  const [tasks, setTasks] = useState<string[]>([]);

  // Step 4
  const [integrations, setIntegrations] = useState<string[]>([]);

  const toggleItem = (list: string[], setList: (v: string[]) => void, item: string) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  const nextStep = () => {
    if (step === 0 && (!bizName || !phone || !contactName)) {
      Alert.alert('Eksik Bilgi', 'Lütfen işletme adı, yetkili kişi ve telefon alanlarını doldurun.');
      return;
    }
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => { if (step > 0) setStep(step - 1); };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Fiyat Teklifi Al</Text>
      <Text style={styles.sub}>İşletmenize özel AI asistan teklifi oluşturalım.</Text>

      <StepIndicator steps={5} current={step} labels={STEP_LABELS} />

      {/* ─── STEP 1: İşletme Bilgileri ─── */}
      {step === 0 && (
        <GlassCard>
          <Text style={styles.stepTitle}>İşletme Bilgileri</Text>
          <Input label="İşletme Adı *" value={bizName} onChangeText={setBizName} placeholder="Örn: Salon Bella" />
          <Text style={styles.inputLabel}>Sektör *</Text>
          <View style={styles.chipWrap}>
            {SECTORS.map(s => (
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
          <Input label="Şehir" value={city} onChangeText={setCity} placeholder="Örn: İstanbul" />
          <Input label="Yetkili Kişi Adı *" value={contactName} onChangeText={setContactName} placeholder="Adınız Soyadınız" />
          <Input label="Telefon *" value={phone} onChangeText={setPhone} placeholder="+90 5XX XXX XX XX" keyboardType="phone-pad" />
          <Input label="E-posta" value={email} onChangeText={setEmail} placeholder="ornek@mail.com" keyboardType="email-address" />
        </GlassCard>
      )}

      {/* ─── STEP 2: Çağrı Yoğunluğu ─── */}
      {step === 1 && (
        <GlassCard>
          <Text style={styles.stepTitle}>Çağrı Yoğunluğu</Text>
          <Text style={styles.inputLabel}>Günde kaç arama alıyorsunuz?</Text>
          <View style={styles.chipWrap}>
            {CALL_VOLUME_OPTIONS.map(v => (
              <TouchableOpacity
                key={v}
                onPress={() => setCallVolume(v)}
                style={[styles.chip, callVolume === v && styles.chipActive]}
              >
                <Text style={[styles.chipText, callVolume === v && styles.chipTextActive]}>{v}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Input label="Kaç personel telefonla ilgileniyor?" value={staffCount} onChangeText={setStaffCount} placeholder="Örn: 2" keyboardType="numeric" />
          <Input label="En çok hangi sorular soruluyor?" value={topQuestions} onChangeText={setTopQuestions} placeholder="Örn: Fiyat, randevu, konum..." multiline />
          <Input label="Aramaların kaçta kaçı randevu/satış odaklı?" value={salesPercent} onChangeText={setSalesPercent} placeholder="Örn: %60" />
        </GlassCard>
      )}

      {/* ─── STEP 3: Agent Görevi ─── */}
      {step === 2 && (
        <GlassCard>
          <Text style={styles.stepTitle}>Agent Ne Yapsın?</Text>
          <Text style={styles.stepSub}>AI asistanınızın yapmasını istediğiniz görevleri seçin.</Text>
          {AGENT_TASKS.map(t => (
            <TouchableOpacity
              key={t}
              onPress={() => toggleItem(tasks, setTasks, t)}
              style={[styles.checkbox, tasks.includes(t) && styles.checkboxActive]}
            >
              <View style={[styles.checkboxBox, tasks.includes(t) && styles.checkboxBoxActive]}>
                {tasks.includes(t) && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>{t}</Text>
            </TouchableOpacity>
          ))}
        </GlassCard>
      )}

      {/* ─── STEP 4: Entegrasyon ─── */}
      {step === 3 && (
        <GlassCard>
          <Text style={styles.stepTitle}>Entegrasyon İhtiyacı</Text>
          <Text style={styles.stepSub}>Hangi araçlarla entegre çalışsın?</Text>
          {INTEGRATIONS.map(t => (
            <TouchableOpacity
              key={t}
              onPress={() => toggleItem(integrations, setIntegrations, t)}
              style={[styles.checkbox, integrations.includes(t) && styles.checkboxActive]}
            >
              <View style={[styles.checkboxBox, integrations.includes(t) && styles.checkboxBoxActive]}>
                {integrations.includes(t) && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>{t}</Text>
            </TouchableOpacity>
          ))}
        </GlassCard>
      )}

      {/* ─── STEP 5: Sonuç ─── */}
      {step === 4 && (
        <GlassCard style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 48, marginBottom: Spacing.md }}>🎉</Text>
          <Text style={styles.resultTitle}>Teklif Talebiniz Alındı!</Text>
          <Text style={styles.resultSub}>
            İşletmeniz için ön analiz oluşturuldu.{'\n'}Size özel kurulum görüşmesi planlayalım.
          </Text>
          <GradientButton
            title="Görüşme Saati Seç"
            onPress={() => router.push('/(tabs)/appointment')}
            size="lg"
            style={{ width: '100%', marginTop: Spacing.lg }}
          />
          <GradientButton
            title="💬  WhatsApp'tan Devam Et"
            onPress={() => openWhatsApp()}
            variant="whatsapp"
            size="lg"
            style={{ width: '100%', marginTop: Spacing.sm }}
          />
        </GlassCard>
      )}

      {/* Navigation */}
      {step < 4 && (
        <View style={styles.nav}>
          {step > 0 && (
            <GradientButton title="← Geri" onPress={prevStep} variant="outline" style={{ flex: 1 }} />
          )}
          <GradientButton
            title={step === 3 ? 'Gönder' : 'Devam →'}
            onPress={nextStep}
            style={{ flex: 1 }}
          />
        </View>
      )}
    </ScrollView>
  );
}

function Input({ label, value, onChangeText, placeholder, keyboardType, multiline }: any) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textMuted}
        keyboardType={keyboardType}
        multiline={multiline}
        style={[styles.input, multiline && { height: 80, textAlignVertical: 'top' }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingHorizontal: Spacing.lg, paddingTop: 60, paddingBottom: 120 },
  title: { color: Colors.textPrimary, fontSize: FontSize.xxl, fontWeight: '800', marginBottom: 6 },
  sub: { color: Colors.textSecondary, fontSize: FontSize.md, marginBottom: Spacing.xl },
  stepTitle: { color: Colors.textPrimary, fontSize: FontSize.lg, fontWeight: '700', marginBottom: Spacing.md },
  stepSub: { color: Colors.textSecondary, fontSize: FontSize.sm, marginBottom: Spacing.md },
  // Inputs
  inputGroup: { marginBottom: Spacing.md },
  inputLabel: { color: Colors.textSecondary, fontSize: FontSize.sm, fontWeight: '600', marginBottom: 6 },
  input: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: BorderRadius.md,
    borderWidth: 1, borderColor: Colors.cardBorder,
    color: Colors.textPrimary, fontSize: FontSize.md,
    paddingHorizontal: Spacing.md, paddingVertical: 12,
  },
  // Chips
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: Spacing.md },
  chip: {
    paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.surfaceLight,
    borderWidth: 1, borderColor: Colors.cardBorder,
  },
  chipActive: { backgroundColor: 'rgba(59,130,246,0.15)', borderColor: Colors.primary },
  chipText: { color: Colors.textSecondary, fontSize: FontSize.sm },
  chipTextActive: { color: Colors.primary, fontWeight: '600' },
  // Checkboxes
  checkbox: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  checkboxActive: {},
  checkboxBox: {
    width: 22, height: 22, borderRadius: 6,
    borderWidth: 1.5, borderColor: Colors.textMuted,
    marginRight: 12, alignItems: 'center', justifyContent: 'center',
  },
  checkboxBoxActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  checkmark: { color: '#fff', fontSize: 13, fontWeight: '700' },
  checkboxLabel: { color: Colors.textPrimary, fontSize: FontSize.md },
  // Result
  resultTitle: { color: Colors.textPrimary, fontSize: FontSize.xl, fontWeight: '800', marginBottom: 8 },
  resultSub: { color: Colors.textSecondary, fontSize: FontSize.md, textAlign: 'center', lineHeight: 24 },
  // Nav
  nav: { flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.lg },
});
