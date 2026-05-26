import { StyleSheet, Text, View } from 'react-native';

export default function TaskCard({ title, category, start, end, style }) {
  
  return (
      <View style={[style, styles.card]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.times}>
          <Text style={styles.time}>{start}</Text>
          <Text style={styles.time}>{end}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  card: {
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
});