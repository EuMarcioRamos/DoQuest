import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './screens/TelaInicial';
import Dashboard from './screens/Dashboard';
import Planner from './screens/planner';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Planner" component={Planner} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}