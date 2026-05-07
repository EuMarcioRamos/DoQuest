import Feather from '@expo/vector-icons/Feather';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function TaskScheduleCard({ title, category, start, end, onEdit }) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.row}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.times}>
          <Text style={styles.time}>{start}</Text>
          <Text style={styles.time}>{end}</Text>
        </View>
      </View>

      <Pressable style={styles.editButton} onPress={onEdit}>
        <Feather name="edit-3" size={18} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#FE7C2C',
    paddingVertical: 10,
    paddingHorizontal: 14,
    shadowColor: '#82382E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
  },
  category: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    marginTop: -2,
  },
  times: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 6,
  },
  time: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
  },
  editButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#F7A94D',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#82382E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
});
