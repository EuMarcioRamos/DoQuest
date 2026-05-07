import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import RoundedBottomMenu from '../components/RoundedBottomMenu';
import TaskModeSwitch from '../components/TaskModeSwitch';
import TaskScheduleCard from '../components/TaskScheduleCard';
import WeekdayPills from '../components/WeekdayPills';

const MOCK_TASKS = [
  {
    id: '1',
    title: 'Banco de dados',
    category: 'Estudos',
    start: '10:00 AM',
    end: '11:00 AM',
  },
  {
    id: '2',
    title: 'Peito e tríceps',
    category: 'Esportes',
    start: '14:00 PM',
    end: '13:00 PM',
  },
  {
    id: '3',
    title: 'Mobile',
    category: 'Estudos',
    start: '15:00 PM',
    end: '16:00 PM',
  },
];

export default function TasksWireframe({ navigation }) {
  const [mode, setMode] = useState('rotina');
  const [selectedDay, setSelectedDay] = useState(0);
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Tarefas</Text>
        <View style={styles.headerLine} />

        <TaskModeSwitch mode={mode} onChange={setMode} />
        <WeekdayPills selectedDay={selectedDay} onSelectDay={setSelectedDay} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Domingo</Text>
          <View style={styles.sectionLine} />
        </View>

        <View style={styles.tasksList}>
          {MOCK_TASKS.map((task) => (
            <TaskScheduleCard
              key={task.id}
              title={task.title}
              category={task.category}
              start={task.start}
              end={task.end}
              onEdit={() => console.log('editar', task.id)}
            />
          ))}
        </View>
      </ScrollView>

      <Pressable style={styles.floatingButton} onPress={() => console.log('nova tarefa')}>
        <Feather name="plus" size={28} color="#E3700C" />
      </Pressable>

      <RoundedBottomMenu
        onHome={() => navigation.navigate('Dashboard')}
        onNote={() => navigation.navigate('Planner')}
        onUser={() => navigation.navigate('TasksWireframe')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE9D6',
  },
  content: {
    paddingHorizontal: 14,
    paddingTop: 28,
    paddingBottom: 140,
  },
  pageTitle: {
    fontFamily: 'Montserrat_700Bold',
    color: '#82382E',
    fontSize: 46,
  },
  headerLine: {
    marginTop: 4,
    height: 2,
    backgroundColor: '#82382E',
    marginBottom: 14,
  },
  sectionHeader: {
    marginTop: 26,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sectionTitle: {
    fontFamily: 'Montserrat_700Bold',
    color: '#82382E',
    fontSize: 44,
  },
  sectionLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#82382E',
  },
  tasksList: {
    gap: 12,
  },
  floatingButton: {
    position: 'absolute',
    right: 24,
    bottom: 95,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#82382E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
});
