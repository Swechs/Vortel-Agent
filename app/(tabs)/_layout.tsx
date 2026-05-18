import { Tabs } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, FontSize } from '@/constants/Colors';

function TabIcon({ icon, label, focused }: { icon: string; label: string; focused: boolean }) {
  return (
    <View style={styles.tabItem}>
      <Text style={[styles.icon, focused && styles.iconActive]}>{icon}</Text>
      <Text style={[styles.label, focused && styles.labelActive]}>{label}</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0A0F1E',
          borderTopColor: 'rgba(59,130,246,0.1)',
          borderTopWidth: 1,
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="🏠" label="Ana Sayfa" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="samples"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="🎧" label="Ses Örnekleri" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="quote"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="📋" label="Teklif Al" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="📅" label="Randevu" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="👤" label="Profil" focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabItem: { alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 22, opacity: 0.5 },
  iconActive: { opacity: 1 },
  label: { fontSize: 10, color: Colors.textMuted, marginTop: 2 },
  labelActive: { color: Colors.primary, fontWeight: '600' },
});
