import { Linking } from 'react-native';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/constants/Data';

export function openWhatsApp(customMessage?: string) {
  const msg = encodeURIComponent(customMessage ?? WHATSAPP_MESSAGE);
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${msg}`;
  Linking.openURL(url).catch(() => {});
}

export function openPhone() {
  Linking.openURL(`tel:${WHATSAPP_NUMBER}`).catch(() => {});
}
