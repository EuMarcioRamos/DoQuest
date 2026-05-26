import { Pressable, StyleSheet, Text, View } from 'react-native';
import SelectableButton from '../SelectableButton';

export default function WeekdayPills({ selectedDay, onSelectDay }) {

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <View style={styles.row}>
      {weekDays.map((label, index) => {
        const isSelected = selectedDay === index;
        return (
          <SelectableButton
            key={`${label}-${index}`}
            selected={isSelected}
            onPress={() => onSelectDay(index)}
            style={styles.pill}
          >
            <Text style={[styles.pillLabel, isSelected && styles.selectedPillLabel]}>{label}</Text>
          </SelectableButton>
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
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#82382E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  
  pillLabel: {
    color: '#E3700C',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
  },
  selectedPillLabel: {
    color: '#FFF',
  },
});
