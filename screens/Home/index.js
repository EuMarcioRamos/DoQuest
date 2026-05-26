import { StyleSheet, Text, View, Pressable} from 'react-native'
import Feather from '@expo/vector-icons/Feather';   



export default function Dashboard({navigation}) {
    
    return (

        <View style={styles.container}>
            <View style={styles.perfil}>
                <View style={styles.boxPerfil}>
                    <Feather
                        style={styles.icon}
                        name="user"
                        size={40}
                        color="#fff"
                    />
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.nomeLevel}>
                    <Text style={styles.nome}>
                        User
                    </Text>
                    <Text style={styles.level}>
                        Level geral 1
                    </Text>
                </View>
                <View style={styles.reviewDiario}>
                    <Text style={styles.reviewTitle}>Review Diario</Text>
                    <View style={styles.squares}>
                        <View style={styles.square}>
                            <Text style={styles.squareTitles}>   Concluidas   </Text>
                            <Text style={styles.squareNumber}>2</Text>
                        </View>
                        <View style={styles.square}>
                            <Text style={styles.squareTitles}>Em Progresso</Text>
                            <Text style={styles.squareNumber}>5</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.habilidades}>
                    <Text style={styles.habilidadesTittle}>Habilidades</Text>
                    <View style={styles.boxHabilidade}>
                        <Text style={styles.habilidadeLvl}>Intelecto - Lvl 1</Text>
                        <View style={styles.barra1}>
                            <View style={styles.barra2}></View>
                        </View>
                        <Text style={styles.xpTime}>200/500 xp - 2 horas</Text>
                    </View>
                    <View style={styles.boxHabilidade}>
                        <Text style={styles.habilidadeLvl}>Vitalidade - Lvl 1</Text>
                        <View style={styles.barra1}>
                            <View style={styles.barra2}></View>
                        </View>
                        <Text style={styles.xpTime}>200/500 xp - 2 horas</Text>
                    </View>
                    <View style={styles.boxHabilidade}>
                        <Text style={styles.habilidadeLvl}>Oficio - Lvl 1</Text>
                        <View style={styles.barra1}>
                            <View style={styles.barra2}></View>
                        </View>
                        <Text style={styles.xpTime}>200/500 xp - 2 horas</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE9D6',
        flex: 1,
    },

    perfil: {
        marginTop: 30,
        alignItems: 'flex-end',
    },

    boxPerfil: {
        backgroundColor: '#FE7C2C',
        padding: 10,
        borderRadius: 50,
        marginTop: 40,
        marginRight: '5%'
    },

    section: {
        marginLeft: 37,
        marginRight: 37,
        marginBottom: 50,
        gap: 40

    },

    nomeLevel: {


    },

    nome: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 40,
        color: '#82382E',
    },

    level: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
        color: '#82382E',

    },

    reviewDiario: {
        borderRadius: 20,
        backgroundColor: '#FE7C2C',

    },

    reviewTitle: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 17,
        color: '#fff',
        marginTop: '3%',
        marginLeft: '3%'
    },

    squares: {
        marginTop: '3%',
        marginBottom: '3%',
        gap: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    square: {
        backgroundColor: '#E3700C',
        paddingVertical: '7%',
        paddingHorizontal: '4%',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },

    squareTitles: {
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 13
    },

    squareNumber: {
        marginTop: '10%',
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    },

    habilidades: {
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        borderRadius: 20,
        backgroundColor: '#FE7C2C'
    },

    habilidadesTittle: {
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 30,
    },

    boxHabilidade: {
        gap: 5,
        marginBottom: 30
    },

    habilidadeLvl: {
        color: '#fff',
        marginLeft: '2%'
    },

    barra1: {
        justifyContent: 'center',
        backgroundColor: '#C0DEFF',
        height: 20,
        borderRadius: 40
    },

    barra2: {
        backgroundColor: '#EB8730',
        width: 150,
        height: 17,
        borderRadius: 40
    },

    xpTime: {
        color: '#fff',
        marginLeft: '2%'
    },

    
})