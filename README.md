# 🚀 Voxtel Agent - Yapay Zeka Destekli Otonom Müşteri Temsilcisi

## 📌 Proje Özeti
**Voxtel Agent**, işletmelerin müşteri iletişimini 7/24 kesintisiz ve otonom hale getiren, doğal dil işleme (NLP) yeteneklerine sahip bir **Yapay Zeka (AI) Telefon Asistanı** çözümüdür. İnsan temsilcilerin yetişemediği yoğunluklarda aramaları karşılar, müşterilerin ihtiyaçlarını analiz eder, ilgili departmanlara yönlendirme yapar ve takvim üzerinden otomatik randevu oluşturur.

---

## 🛠 Kullanılan Teknolojiler ve Mimari Çözümler
Proje, hem iOS/Android mobil cihazlarda hem de Web platformlarında (Cross-Platform) kusursuz çalışacak şekilde en modern yazılım standartlarıyla geliştirilmiştir.

- **Framework:** `React Native` & `Expo SDK 54`
- **Yönlendirme (Routing):** `Expo Router` (File-based routing ile Next.js benzeri modern mimari)
- **Kullanıcı Arayüzü (UI):** Mobil öncelikli (Mobile-First), platform bağımsız tasarım. Glassmorphism tasarım dili ve yüksek performanslı bileşenler (`expo-linear-gradient`).
- **Animasyon Motoru:** `react-native-reanimated` (v3). JavaScript thread'ini meşgul etmeyen, JSI (JavaScript Interface) tabanlı TurboModule yapısı sayesinde 60 FPS / 120 FPS akıcı animasyonlar.
- **Native Entegrasyonlar:** `react-native-worklets-core`, `expo-av` (Ses işleme), `expo-haptics` (Dokunsal geri bildirim), `expo-linking` (Derin bağlantı ve entegrasyonlar).
- **Dil ve Tip Güvenliği:** `TypeScript` (Strict Mode)

---

## 🌟 Öne Çıkan Gelişmiş Özellikler (Hocayı Etkileyecek Kısımlar)

### 1. Cross-Platform & Evrensel Uygulama (Universal App)
Tek bir kod tabanı (Single Codebase) kullanılarak hem **Native iOS**, hem **Native Android** hem de **PWA (Progressive Web App)** çıktıları alınmıştır. React Native Web uyumluluğu sayesinde donanım ivmeli web render'ı sağlanmıştır.

### 2. JSI ve Worklet Tabanlı Animasyonlar
Klasik React Native animasyonlarının aksine, animasyonlar doğrudan **C++ Native Thread** üzerinde çalışır. Bu, ağır veri işlemlerinde bile arayüzde (UI) donma veya takılma yaşanmamasını garanti eder.

### 3. Modüler ve Genişletilebilir Bileşen Mimarisi
- `GlassCard`, `GradientButton`, `SectorCard` gibi bileşenler tamamen izole (decoupled) ve tekrar kullanılabilir (reusable) şekilde tasarlanmıştır.
- Renk paletleri ve tipografi (Design Tokens) `constants/Colors.ts` üzerinden merkezi olarak yönetilmektedir.

### 4. Continuous Deployment (Sürekli Dağıtım)
Proje, GitHub Pages ve Expo Web Export entegrasyonu kullanılarak **CI/CD pipeline** vizyonuyla saniyeler içinde yayına alınabilir (Deploy) hale getirilmiştir. GitHub Actions ve Jekyll-bypass (`.nojekyll`) yöntemleri kullanılarak statik dosya sunumu optimize edilmiştir.

---

## 💼 Çözülen İş Problemleri (Business Value)
1. **Zaman Maliyeti:** İşletmelerin çağrı karşılama süresini ve personel maliyetini %80'e kadar düşürür.
2. **Potansiyel Müşteri (Lead) Kaybı:** Mesai saatleri dışında veya hat yoğunluğunda kaçan çağrıları yakalar.
3. **Satış Optimizasyonu:** AI, gelen çağrılardaki müşteri niyetini (intent) analiz eder ve sadece "Sıcak (Warm) Lead" olarak nitelendirilen müşterileri gerçek satış ekibine aktarır.

---

## 🚀 Projeyi Canlı Test Edin!
**Canlı Web Sürümü:** [https://Swechs.github.io/Vortel-Agent/](https://Swechs.github.io/Vortel-Agent/)
*(Tamamen mobil uyumlu, Native hissi veren Web App)*
