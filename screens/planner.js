import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import { useState } from 'react';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Feather from '@expo/vector-icons/Feather'; 
import RoundedBottomMenu from '../components/RoundedBottomMenu';

export default function Planner({navigation}){

    const[diaSelecionado, setDiaSelecionado] = useState(1);

    const [fontsLoaded] = useFonts ({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    if (!fontsLoaded) return null;

    const dias = 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
     11, 12, 13, 14, 15, 16, 17, 18,
     19, 20, 21, 22, 23, 24, 25, 26,
     27, 28, 29, 30   
    ];

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
                            <Pressable 
                                onPress={() => setDiaSelecionado(item)}
                                style={[styles.cardData, selecionado && styles.cardSelecionado]}
                            >
                                <Text style={[styles.textDay, selecionado && styles.textDaySelecionado]}>DIA</Text>
                                <Text style={[styles.textData, selecionado && styles.textDataSelecionado]}>{item}</Text>
                            </Pressable>
                        )

                    }}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.titleAndamento}>Em andamento</Text>
                <View style={styles.tarefas}>
                    <View style={styles.tarefaTime}>
                        <Text style={styles.textTime}>10:00 AM</Text>
                        <Text style={styles.textTime}>11:00 AM</Text>
                    </View>
                    <View style={styles.cardTarefa}>
                        <View style={styles.titleXp}>
                            <Text style={styles.titleTarefa}>Banco de dados</Text>
                            <Text style={styles.titleTarefa}>100 xp</Text>
                        </View>
                        <View style={styles.tarefaDesc}>
                            <Text style={styles.tarefaType}>Estudos</Text>
                        </View>
                    </View>
                </View>
            </View>

            <RoundedBottomMenu
                onHome={() => navigation.navigate('Dashboard')}
                onNote={() => navigation.navigate('Planner')}
                onUser={() => navigation.navigate('TasksWireframe')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDCBD',
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
        gap:220
    },

    flatList: {
        gap: 20
    },

    cardData: {
        marginLeft: 20,
        paddingHorizontal:15,
        minWidth: 90,
        paddingVertical: 35,
        backgroundColor: '#fff',
        borderRadius:40
    },

    cardSelecionado: {
        backgroundColor: '#E3700C'
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
        flexDirection: 'row',

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
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
        height:100,
        borderRadius: 10,
        backgroundColor: '#E3700C'
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