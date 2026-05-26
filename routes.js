import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from './screens/Home/index';
import Planner from './screens/Planner/index';
import TaskWireframe from './screens/TaskWireframe/index';

import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator()


export default function Routes(){

    return (
            <Tabs.Navigator 
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.menu
                }}
            >

                <Tabs.Screen
                    name = "Home"
                    component={Dashboard}
                    options={{
                        tabBarIcon: () => {
                            return <Feather 
                                size={25} 
                                color={"#fff"} 
                                name="home" style={{marginTop: 5}} 
                            />
                        }
                    }} 
                />

                <Tabs.Screen
                    name = "Planner"
                    component={Planner}
                    options={{
                        tabBarIcon: () => {
                            return <MaterialCommunityIcons 
                                size={25} 
                                color={"#fff"} 
                                name="note-outline" 
                                style={{marginTop: 5}}
                            />
                        }
                    }} 
                />

                <Tabs.Screen
                    name = "TaskWireframe"
                    component={TaskWireframe}
                    options={{
                        tabBarIcon: () => {
                            return <MaterialCommunityIcons 
                                size={25} 
                                color={"#fff"} 
                                name="note-edit-outline"
                                style={{marginTop: 5}}
                                />
                        }
                    }} 
                />
            </Tabs.Navigator>
        
    )
}

const styles = StyleSheet.create({
    menu : {
        backgroundColor: '#FE7C2C',
        height:50,
        borderRadius: 20,
        marginBottom: '2.5%',
        marginLeft: '2.5%',
        width: '95%',
        position: 'absolute',
    },
})