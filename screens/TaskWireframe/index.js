import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import TaskModeSwitch from '../../components/TaskModeSwitch';
import TaskScheduleCard from '../../components/TaskScheduleCard';
import WeekdayPills from '../../components/WeekdayPills';
import { MOCK_TASKS } from '../../data';


export default function TasksWireframe({ navigation }) {
  const [mode, setMode] = useState('rotina');
  const [selectedDay, setSelectedDay] = useState(0);
  const [tasks, setTasks] = useState([]);

  useFocusEffect(
      useCallback(() => {
          async function carregarTasks() {
              const list = await AsyncStorage.getItem('task');
              setTasks(list ? JSON.parse(list) : []);
          }
          carregarTasks();
      }, [])
  );


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
          {tasks.map((task) => (
            <TaskScheduleCard
              key={task.id}
              title={task.title}
              category={task.category}
              start={task.start}
              end={task.end}
              onEdit={() => console.log('editar', task.id)}
              style={styles.fullWidthCard}
            />
          ))}
        </View>
      </ScrollView>

      <Pressable style={styles.floatingButton} onPress={() => navigation.navigate('AddTask')}>
        <Feather name="plus" size={28} color="#E3700C" />
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE9D6',
    paddingTop:30
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
  fullWidthCard: {
    flex: 1
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
