import { Pressable, StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function EditButton({ onEdit }) {

  return (
      <Pressable style={styles.editButton} onPress={onEdit}>
        <Feather name="edit-3" size={18} color="#FFFFFF" />
      </Pressable>
  );
}

const styles = StyleSheet.create({
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