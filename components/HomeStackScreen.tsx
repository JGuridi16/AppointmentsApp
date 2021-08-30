
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/home/Home';
import { About } from '../components/about/About';
import AppointmentRegisterForm from '../components/register/AppointmentRegisterForm';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect, Provider } from 'react-redux';
import { store } from '../store';
import { useEffect } from 'react';

const Tabs = createBottomTabNavigator();
const HomeStackScreen = ({ appointments }: any) => {
    const items: number = appointments.length;
    return (
        <Provider store={store}>
            <Tabs.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home')
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        else if (route.name === 'Register')
                            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                        else
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#001f3d',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tabs.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Inicio', tabBarBadge: items ? items : undefined }}
                />
                <Tabs.Screen
                    name="Register"
                    component={AppointmentRegisterForm}
                    options={{ title: 'Registro' }}
                />
                <Tabs.Screen
                    name="About"
                    component={About}
                    options={{
                        title: 'Nosotros'
                    }} />
            </Tabs.Navigator>
        </Provider>
    );
}

const mapStateToProps = (state: any) => ({ appointments: state.appointments })

export default connect(mapStateToProps)(HomeStackScreen);