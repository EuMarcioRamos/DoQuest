import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const MODES = [
  { key: 'rotina', label: 'Rotina' },
  { key: 'unico', label: 'Único' },
];

export default function TaskModeSwitch({ mode, onChange }) {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.wrapper}>
      {MODES.map((item) => {
        const isActive = item.key === mode;
        return (
          <Pressable
            key={item.key}
            onPress={() => onChange(item.key)}
            style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
          >
            <Text style={[styles.label, isActive ? styles.activeLabel : styles.inactiveLabel]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FE7C2C',
    borderRadius: 24,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#82382E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  activeButton: {
    backgroundColor: '#FFFFFF',
  },
  inactiveButton: {
    backgroundColor: '#E3700C',
  },
  label: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  activeLabel: {
    color: '#E3700C',
  },
  inactiveLabel: {
    color: '#FFFFFF',
  },
});
