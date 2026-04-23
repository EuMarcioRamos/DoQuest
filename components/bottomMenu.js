import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {StyleSheet, Pressable, Text, View} from 'react-native';

export default function BottomMenu({onHome, onNote, onUser, onBell}){
    return (
        <View style={styles.menu}>
            <Pressable onPress={onHome}>
                <Feather
                    name="home"
                    size={30}
                    color="#fff"
                />
            </Pressable>
            <Pressable onPress={onNote}>
                <MaterialCommunityIcons
                    name="note-outline"
                    size={30}
                    color="#fff"
                />
            </Pressable>
            <Pressable onPress={onUser}>
                <Feather
                    name="user"
                    size={30}
                    color="#fff"
                />
            </Pressable>
            <Pressable onPress={onBell}>
                <Feather
                    name="bell"
                    size={30}
                    color="#fff"
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE7C2C',
        gap: 50,
        padding: 27,
    }
})
