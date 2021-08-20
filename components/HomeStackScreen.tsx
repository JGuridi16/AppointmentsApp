
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, About, Register } from '../components/screens';
import { Icon } from 'react-native-elements'

const Tabs = createBottomTabNavigator();
export const HomeStackScreen = () => {
    return <Tabs.Navigator initialRouteName="Home">
        <Tabs.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <Tabs.Screen name="Register" component={Register} options={{ title: 'Registro' }} />
        <Tabs.Screen name="About" component={About} options={{ 
            title: 'Nosotros', tabBarIcon: () => (<Icon name="home" size={18} />) }} />
    </Tabs.Navigator>
}
