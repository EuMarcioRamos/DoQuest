import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function TelaInicial({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/paginaInicial.png')}
          style={styles.image} 
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.tituloInicial}>
          Bem-vindo ao DoQuest!
        </Text>

        <Text style={styles.descricao}>
          O aplicativo onde cada tarefa sua vira uma missão, cada missão concluida você ganha XP e desbloqueia conquistas
        </Text>

        <Pressable 
        style={styles.botaoIniciar}
        onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.iniciar}>Começar</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe9d6'
    
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
  },

  info: {
    flex: 1,
    gap: 15,
    marginLeft: '10%',
    marginRight: '10%',
  },

  tituloInicial: {
    fontSize:40,
    color: '#82382E',
    fontWeight: 'bold',

  },

  descricao: {
    fontSize: 18,
    color: '#82382E',
  },

  botaoIniciar: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    width: '50%',
    borderRadius: 20,
    marginTop: 20,
    marginTop: '20%'
  },

  iniciar: {
    textAlign: 'center',
    color: '#82382E',
    fontWeight: '600',
    fontSize: 16,
  }
});