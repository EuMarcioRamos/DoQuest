import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';
import TelaInicial from './screens/TelaInicial';
import AddTask from './screens/AddTask';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts ({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    if (!fontsLoaded) return null;

  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TelaInicial" component={TelaInicial} />
          <Stack.Screen name="Main" component={Routes} />
          <Stack.Screen name="AddTask" component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}