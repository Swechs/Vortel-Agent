// Voxtel Agent — Mock Data & Content
export const WHATSAPP_NUMBER = '+905XXXXXXXXX';
export const WHATSAPP_MESSAGE = 'Merhaba, Voxtel Agent için işletmeme özel demo ve fiyat teklifi almak istiyorum.';

export const SECTORS = [
  { id: 'beauty', title: 'Güzellik Salonu', icon: '💇‍♀️', problem: 'Müşteri randevu almak için arıyor ama telefonlar sürekli meşgul.', solution: 'AI asistan her aramayı karşılar, uygun saati sorar, randevuyu oluşturur.' },
  { id: 'dental', title: 'Diş Kliniği', icon: '🦷', problem: 'Hastalar tedavi bilgisi ve fiyat soruyor, cevap gecikiyor.', solution: 'AI asistan tedavi hakkında bilgi verir, muayene randevusu oluşturur.' },
  { id: 'clinic', title: 'Klinik', icon: '🏥', problem: 'Randevu ve kontrol aramaları personelin vaktini alıyor.', solution: 'AI asistan hastaları yönlendirir, doğru bölüme randevu oluşturur.' },
  { id: 'auto', title: 'Oto Detailing / PPF', icon: '🚗', problem: 'Müşteri araç bilgisini veriyor ama teklif hazırlanamıyor.', solution: 'AI asistan araç bilgilerini alır, ön teklif için lead oluşturur.' },
  { id: 'realestate', title: 'Emlak Ofisi', icon: '🏠', problem: 'Potansiyel alıcılar arıyor ama danışman meşgul.', solution: 'AI asistan müşteri ihtiyacını anlar, uygun portföyü yönlendirir.' },
  { id: 'hotel', title: 'Otel', icon: '🏨', problem: 'Rezervasyon ve bilgi talepleri yoğun saatlerde kaçıyor.', solution: 'AI asistan oda müsaitliğini sorar, ön rezervasyon oluşturur.' },
  { id: 'restaurant', title: 'Restoran', icon: '🍽️', problem: 'Masa rezervasyonu ve menü soruları telefon hattını meşgul ediyor.', solution: 'AI asistan masa ayırır, menü bilgisi verir, özel istekleri not alır.' },
  { id: 'education', title: 'Eğitim Kurumu', icon: '🎓', problem: 'Kayıt ve bilgi aramaları sekreteryanın vaktini alıyor.', solution: 'AI asistan program bilgisi verir, kayıt danışmanına yönlendirir.' },
  { id: 'other', title: 'Diğer Sektörler', icon: '🏢', problem: 'Aramaları kaçırıyorsunuz, müşteriler bekliyor.', solution: 'İşletmenize özel AI asistan senaryosu oluşturuyoruz.' },
];

export const AUDIO_SAMPLES = [
  {
    id: 'beauty',
    title: 'Güzellik Salonu Randevu Asistanı',
    sector: 'Güzellik Salonu',
    description: 'Bir müşteri saç boyama ve bakım randevusu almak için arar. AI asistan müşterinin ihtiyacını anlar, uygun saati sorar ve randevu oluşturur.',
    duration: '1:42',
  },
  {
    id: 'dental',
    title: 'Diş Kliniği Bilgi ve Randevu Asistanı',
    sector: 'Diş Kliniği',
    description: 'Bir hasta implant tedavisi hakkında bilgi almak ister. AI asistan temel bilgiyi verir, muayene randevusu oluşturur.',
    duration: '2:05',
  },
  {
    id: 'auto',
    title: 'Oto Detailing / PPF Teklif Asistanı',
    sector: 'Oto Detailing',
    description: 'Bir müşteri aracı için PPF ve seramik kaplama hakkında bilgi ister. AI asistan araç bilgilerini alır, ön teklif için kayıt oluşturur.',
    duration: '1:58',
  },
];

export const FAQ_ITEMS = [
  { q: 'Voice agent gerçekten insan gibi konuşur mu?', a: 'Evet. Voxtel Agent, doğal dil işleme teknolojisiyle Türkçe konuşur, müşteriyle akıcı bir diyalog kurar. Ses tonu ve konuşma hızı işletmenize göre özelleştirilebilir.' },
  { q: 'Yanlış bilgi verirse ne olur?', a: 'Agent sadece sizin tanımladığınız bilgilerle eğitilir. Bilmediği bir soru geldiğinde, müşteriyi satış ekibinize yönlendirir.' },
  { q: 'Kendi işletmemin bilgileriyle eğitilebilir mi?', a: 'Evet. Hizmetler, fiyatlar, çalışma saatleri, sık sorulan sorular gibi tüm bilgileriniz agent\'a tanımlanır.' },
  { q: 'Randevuları takvime işler mi?', a: 'Evet. Google Calendar, Outlook ve diğer takvim araçlarıyla entegre çalışır.' },
  { q: 'WhatsApp\'a bağlanır mı?', a: 'Evet. Görüşme sonrası WhatsApp üzerinden konum, onay ve hatırlatma mesajları gönderilebilir.' },
  { q: 'Ses örneklerini değiştirebilir miyiz?', a: 'Evet. Kadın, erkek ve farklı tonlarda ses seçenekleri mevcuttur.' },
  { q: 'Kaç günde kurulur?', a: 'Standart kurulum 3-5 iş günüdür. Karmaşık senaryolarda bu süre uzayabilir.' },
  { q: 'Fiyat nasıl belirlenir?', a: 'Fiyat; sektör, çağrı hacmi, entegrasyon ihtiyacı ve agent görevlerine göre belirlenir. Size özel teklif için görüşme planlıyoruz.' },
  { q: 'Aylık ödeme mi, kurulum ücreti mi?', a: 'Tek seferlik kurulum ücreti ve aylık kullanım ücreti şeklinde çalışır. Detaylar görüşmede paylaşılır.' },
  { q: 'Teknik destek var mı?', a: 'Evet. 7/24 teknik destek ekibimiz WhatsApp ve telefon üzerinden ulaşılabilirdir.' },
  { q: 'Müşteri verileri güvende mi?', a: 'Tüm veriler KVKK uyumlu şekilde şifrelenerek saklanır. Üçüncü taraflarla paylaşılmaz.' },
];

export const HOW_IT_WORKS = [
  { step: 1, title: 'İşletmenizi Analiz Ediyoruz', desc: 'Sektörünüzü, çağrı hacminizi ve ihtiyaçlarınızı öğreniyoruz.' },
  { step: 2, title: 'AI Agent Senaryonuzu Yazıyoruz', desc: 'İşletmenize özel konuşma akışı, bilgi tabanı ve kurallar oluşturuyoruz.' },
  { step: 3, title: 'Entegrasyonları Kuruyoruz', desc: 'Takvim, WhatsApp, CRM ve diğer araçlarla bağlantıyı sağlıyoruz.' },
  { step: 4, title: 'Agent Aramaları Karşılıyor', desc: 'AI asistanınız 7/24 aramaları karşılamaya başlıyor.' },
];

export const PROBLEMS = [
  { icon: '📞', title: 'Kaçan Aramalar', desc: 'Müşteri arıyor, kimse cevap veremiyor. Fırsat kayboluyor.' },
  { icon: '⏰', title: 'Geç Dönüşler', desc: 'Geri arama gecikiyor, müşteri rakibe gidiyor.' },
  { icon: '😤', title: 'Tekrarlayan Sorular', desc: 'Personel sürekli aynı soruları yanıtlıyor, vakit kaybı yaşanıyor.' },
  { icon: '🌙', title: 'Kapalı Saatler', desc: 'İşletme kapalıyken gelen aramalar tamamen kayboluyor.' },
];

export const AGENT_TASKS = [
  'Randevu alsın',
  'Fiyat bilgisi versin',
  'Müşteriyi nitelendirsin',
  'Takvime işlesin',
  'WhatsApp\'a yönlendirsin',
  'CRM\'e kayıt atsın',
  'Satış ekibine bildirim göndersin',
  'SSS cevaplasın',
  'Müşteri geri arama talebi oluştursun',
];

export const INTEGRATIONS = [
  'Google Calendar',
  'WhatsApp',
  'CRM',
  'Excel / Google Sheets',
  'Web sitesi',
  'Instagram DM',
  'Özel API',
  'Henüz bilmiyorum',
];

export const CALL_VOLUME_OPTIONS = [
  '1-10 arama/gün',
  '10-30 arama/gün',
  '30-50 arama/gün',
  '50-100 arama/gün',
  '100+ arama/gün',
];

export const MEETING_TYPES = [
  { id: 'phone', label: 'Telefon Görüşmesi', icon: '📞' },
  { id: 'meet', label: 'Google Meet', icon: '💻' },
  { id: 'whatsapp', label: 'WhatsApp Görüşmesi', icon: '💬' },
];
