import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, View } from 'react-native';

export default function RoundedBottomMenu({ onHome, onNote, onUser, onBell }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onHome}>
        <Feather name="home" size={24} color="#FFFFFF" />
      </Pressable>
      <Pressable onPress={onNote}>
        <MaterialCommunityIcons name="note-outline" size={24} color="#FFFFFF" />
      </Pressable>
      <Pressable onPress={onUser}>
        <Feather name="user" size={24} color="#FFFFFF" />
      </Pressable>
      <Pressable onPress={onBell}>
        <Feather name="bell" size={24} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 18,
    left: 18,
    right: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FE7C2C',
    borderRadius: 24,
    paddingVertical: 14,
    shadowColor: '#82382E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});
