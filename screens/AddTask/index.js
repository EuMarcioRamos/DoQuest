import { Text, View, StyleSheet, ScrollView,TextInput, Pressable } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WeekdayPills from "../../components/WeekdayPills";
import TypeTask from "../../components/TypeTask";




export default function AddTask({navigation}){

    const [selectedTask, setSelectedTask] =  useState(null);
    const [selectedDay, setSelectedDay] = useState(0);
    const [typeTask, setTypeTask] = useState('');

    const [time1, setTime1] = useState(new Date());
    const [time2, setTime2] = useState(new Date());
    const [taskName, setTaskName] = useState('');

    const formatarHora = (date) => {
        const horas = date.getHours().toString().padStart(2, '0');
        const minutos = date.getMinutes().toString().padStart(2, '0');
        return `${horas}:${minutos}`;
    };

    let i = 0;

    let Task = {
        id: 0,
        title: taskName,
        category: typeTask,
        start: formatarHora(time1),
        end: formatarHora(time2)
    };

    async function saveTask(){
        try {
            const listaSalva = await AsyncStorage.getItem('task');

            const listaAtual = listaSalva ? JSON.parse(listaSalva) : [];

            Task.id = listaAtual.length;
            listaAtual.push(Task);
            

            await AsyncStorage.setItem('task', JSON.stringify(listaAtual));
            navigation.goBack()


        } catch (e) {
            console.log(e) 
        }
    }

    async function CancelTask(){
        try {
            await AsyncStorage.removeItem('task')

            navigation.goBack()


        } catch (e) {
            console.log(e) 
        }
    }


    return (

        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.pageTitle}>Adicionar tarefa</Text>
                <View style={styles.headerline}/>

                <Text style={styles.titleSteps}>Nome da Tarefa</Text>
                <TextInput 
                    value={taskName}
                    onChangeText={setTaskName}
                    style={styles.inputTask} 
                    placeholder='Ex: Programação' 
                    placeholderTextColor={'#d4d4d4'}
                />

                <Text style={styles.titleSteps}>Tipo da Tarefa</Text>
                <View style={styles.TypeTask}>
                    <TypeTask selectedTask={selectedTask} onSelectTask={setSelectedTask} typeName={setTypeTask}/>
                </View>

                <Text style={styles.titleSteps}>Dia da semana</Text>
                <WeekdayPills selectedDay={selectedDay} onSelectDay={setSelectedDay}/>

                <Text style={styles.titleSteps}>Definição de horario</Text>
                <View style={styles.time}>

                    <View>
                        <Text style={styles.timer}>Inicio</Text>
                        <DateTimePicker
                            value={time1}
                            mode='time'
                            onChange={(event, selectedDate) =>{
                                    setTime1(selectedDate)
                                }}
                            />
                    </View>

                    <View>
                        <Text style={styles.timer}>Fim</Text>
                        <DateTimePicker
                            value={time2}
                            mode='time'
                            onChange={(event, selectedDate) =>{
                                    setTime2(selectedDate)
                                }}
                            />
                    </View>
                </View>

                <View style={styles.saveTask}>
                        <Pressable style={styles.Cancel} onPress={CancelTask}>
                            <Text style={styles.textCancel}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.Save} onPress={saveTask}>
                            <Text style={styles.textSave}>Salvar</Text>
                        </Pressable>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFE9D6',
        paddingTop:30,
        margin: 0
    },

    content: {
        paddingHorizontal: 14,
        paddingTop: 28,
    },

    pageTitle:{
        fontFamily:'Montserrat_700Bold',
        color: '#82382E',
        fontSize: 44
    },

    headerline: {
        backgroundColor: '#82382E',
        height: 2,
        marginTop: 4,
        marginBottom: 14
    },

    titleSteps: {
        marginTop: 50,
        fontFamily: 'Montserrat_700Bold',
        color: '#82382E',
        fontSize: 20
    },

    inputTask:{
        marginTop: 25,
        fontFamily: 'Montserrat_700Bold',
        backgroundColor: '#E3700C',
        color: '#fff',
        padding: 20,
        borderRadius: 10,
        fontSize:20,
    },

    time: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25
    },

    timer:{
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Montserrat_700Bold',
        color: '#E3700C'
    },

    saveTask:{ 
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    Cancel: {
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 55,
        borderRadius: 30,
        

    },

    Save: {
        backgroundColor: '#E3700C',
        padding: 20,
        paddingVertical: 20,
        paddingHorizontal: 55,
        borderRadius: 30,

    },

    textCancel: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Montserrat_700Bold',
        color: '#E3700C',
        
    },

    textSave: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF'
    }





})