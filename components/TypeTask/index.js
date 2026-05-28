import { View, Text, StyleSheet } from "react-native";
import SelectableButton from "../../components/SelectableButton";
import { typeOfTask } from "../../data";

export default function TypeTask({selectedTask, onSelectTask, typeName}){

    return (
        <View style={styles.CardTypeTask}>
            {typeOfTask.map((label, index) => {
                const isSelected = selectedTask === index;
                return (
                    <SelectableButton
                        key={`${label}-${index}`}
                        selected={isSelected}
                        onPress={() => {
                            onSelectTask(index); 
                            typeName(label);
                        }}
                        style={styles.CardTask}
                        
                    >
                        <Text style={[styles.textCardTask, isSelected && styles.selectedTextCardT]}>{label}</Text>
                    </SelectableButton>
                );
            })
            }
        </View>
    )
}

const styles = StyleSheet.create({

    CardTypeTask: {
        marginTop: 25,
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    CardTask: {
        padding: 30,
        borderRadius: 10,
        borderColor: '#E3700C',
        borderWidth: 1

    },

    textCardTask: {
        fontFamily: 'Montserrat_700Bold',
        color: '#E3700C'
    },

    selectedTextCardT: {
        color: '#FFF'
    }
})