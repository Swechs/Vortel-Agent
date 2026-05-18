// Voxtel Agent — Design Tokens
export const Colors = {
  // Core
  background: '#060B18',
  surface: '#0D1425',
  surfaceLight: '#141E35',
  card: 'rgba(20, 30, 53, 0.7)',
  cardBorder: 'rgba(59, 130, 246, 0.15)',

  // Brand
  primary: '#3B82F6',
  primaryDark: '#2563EB',
  accent: '#8B5CF6',
  gradient: ['#3B82F6', '#8B5CF6'] as const,
  gradientCTA: ['#3B82F6', '#6D28D9'] as const,

  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#06B6D4',

  // Text
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  textAccent: '#60A5FA',

  // WhatsApp
  whatsapp: '#25D366',

  // Misc
  white: '#FFFFFF',
  black: '#000000',
  overlay: 'rgba(0,0,0,0.6)',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
  hero: 34,
};
