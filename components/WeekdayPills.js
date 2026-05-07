import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function WeekdayPills({ selectedDay, onSelectDay }) {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <View style={styles.row}>
      {weekDays.map((label, index) => {
        const isSelected = selectedDay === index;
        return (
          <Pressable
            key={`${label}-${index}`}
            onPress={() => onSelectDay(index)}
            style={[styles.pill, isSelected && styles.selectedPill]}
          >
            <Text style={[styles.pillLabel, isSelected && styles.selectedPillLabel]}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  pill: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: '#E3700C',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#82382E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  selectedPill: {
    backgroundColor: '#FFFFFF',
  },
  pillLabel: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
  },
  selectedPillLabel: {
    color: '#E3700C',
  },
});
