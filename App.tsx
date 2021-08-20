import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingPage, CreateAccount, Splash } from './components/screens';
import { HomeStackScreen } from './components/HomeStackScreen';

const App: () => ReactNode = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createStackNavigator();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])

  if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={LandingPage}
          options={{
            title: 'Iniciar Sesión',
            animationEnabled: true
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            title: 'Crear Cuenta',
            animationEnabled: true
          }}
        />
        <Stack.Screen
          name="App"
          component={HomeStackScreen}
          options={{
            title: 'Gestión de Citas Médicas',
            animationEnabled: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
