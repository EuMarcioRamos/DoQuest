import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import Feather from '@expo/vector-icons/Feather'; 
import TaskCard from '../../components/TaskCard';
import SelectableButton from '../../components/SelectableButton';
import TasksWireframe from '../TaskWireframe';
import { MOCK_TASKS, dias } from '../../data';


export default function Planner({navigation}){

    const[diaSelecionado, setDiaSelecionado] = useState(1);

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


    return(
        <View style={styles.container}>
            <View style={styles.mes}>
                <View style={styles.arrowMes}>
                    <Feather 
                        name="arrow-left"  
                        size={24} 
                        color="#82382E" 
                    />
                    <Text style={styles.mesSmall}>Março</Text>
                </View>
                <Text style={styles.textmes}>Abril</Text>
                <View style={styles.arrowMes}>
                    <Text style={styles.mesSmall}>Maio</Text>
                    <Feather 
                        name="arrow-right" 
                        size={24} 
                        color="#82382E" 
                    />
                </View>
            </View>
            <View style={styles.calendar}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dias}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({item}) => {

                        const selecionado = item === diaSelecionado;

                        return(
                            <SelectableButton 
                                selected={selecionado}
                                onPress={() => setDiaSelecionado(item)}
                                style={styles.cardData}
                            >
                                <Text style={[styles.textDay, selecionado && styles.textDaySelecionado]}>DIA</Text>
                                <Text style={[styles.textData, selecionado && styles.textDataSelecionado]}>{item}</Text>
                            </SelectableButton>
                        )

                    }}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.titleAndamento}>Em andamento</Text>
                <View style={styles.tarefas}>
    
                    <View style={styles.cardTarefa}>
                        {tasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                title={task.title}
                                category={task.category}
                                start={task.start}
                                end={task.end}
                            />
                        ))}
                    </View>
                </View>
            </View>

            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE9D6',
        paddingTop:70,
        gap: 20
    },

    mes: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    arrowMes: {
        flexDirection: 'row',
        gap: 10
    },

    mesSmall: {
        marginTop: 5,
        fontFamily: 'Montserrat_400Regular',
        color: '#82382E'
    },

    textmes: {
        color: '#82382E',
        fontFamily: 'Montserrat_700Bold',
        fontSize:40
    },

    calendar: {
        
    },

    flatList: {
        gap: 20
    },

    cardData: {
        marginLeft: 20,
        paddingHorizontal:15,
        minWidth: 90,
        paddingVertical: 35,
        borderRadius:40
    },

    textDay: {
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        color: '#E3700C',
    },

    textData: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 40,
        color: '#E3700C',
        textAlign: 'center'
    },

    textDaySelecionado: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
        textAlign:'center',
    },

    textDataSelecionado: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
        textAlign:'center',
        fontSize: 40
    },

    section:{
        marginLeft:10,
        marginRight: 10,
        gap: 10
    },

    titleAndamento:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 30,
        color: '#82382E'
    },

    tarefas: {
    },

    tarefaTime: {
        height:95,
        justifyContent:'space-between'
    },

    textTime: {
        fontFamily: 'Montserrat_700Bold',
        color: '#E3700C',
    },

    cardTarefa: {
        marginLeft: 20,
        marginRight: 20,
        gap: 20,
        
    },

    titleXp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    titleTarefa: {
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
    },
    
    tarefaDesc: {

    },

    tarefaType: {
        color: '#fff',
        fontFamily: 'Montserrat_400Regular',
    },



})