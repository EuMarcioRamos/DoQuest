import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native-web";

export default function SelectableButton({selected, onPress, children, style}){

    return(
        <Pressable
            onPress={onPress}
            style={[styles.base, selected && styles.selected, style]}
        >
            {children}
            
        </Pressable>
    )
}

const styles = StyleSheet.create({
    base:{
        backgroundColor: '#FFF'
    },

    selected: {
        backgroundColor:'#E3700C'
    }
})