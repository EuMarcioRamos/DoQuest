import Feather from '@expo/vector-icons/Feather';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import TaskCard from '../TaskCard';
import EditButton from '../EditButton'

export default function TaskScheduleCard({ title, category, start, end, onEdit, style}) {

  return (
    <View style={styles.row}>
      <TaskCard 
        title={title}
        category={category}
        start={start}
        end={end}
        style={style}
      />

      <EditButton
        onEdit={onEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
