import { Pressable, StyleSheet, Text, View } from 'react-native';
import SelectableButton from '../SelectableButton';

const MODES = [
  { key: 'rotina', label: 'Rotina' },
  { key: 'unico', label: 'Único' },
];

export default function TaskModeSwitch({ mode, onChange }) {

  return (
    <View style={styles.wrapper}>
      {MODES.map((item) => {
        const isActive = item.key === mode;
        return (
          <SelectableButton
            key={item.key}
            selected={isActive}
            onPress={() => onChange(item.key)}
            style={styles.button}
          >
            <Text style={[styles.label, isActive ? styles.activeLabel : styles.inactiveLabel]}>
              {item.label}
            </Text>
          </SelectableButton>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 24,
    padding: 15,
    flexDirection: 'row',
    alignItems:'center',
    gap: 12,
  },
  button: {
    flex: 1,
    borderRadius: 30,
    height: 70,
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
    backgroundColor: '#E3700C',
  },
  inactiveButton: {
    backgroundColor: '#FFF',
  },
  label: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
  },
  activeLabel: {
    color: '#FFF',
  },
  inactiveLabel: {
    color: '#E3700C',
  },
});
