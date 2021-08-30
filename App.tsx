import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from './components/utils';
import LandingPage from './components/landing/LandingPage';
import CreateAccount from './components/account/CreateAccount';
import HomeStackScreen from './components/HomeStackScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const App: () => ReactNode = () => {
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createStackNavigator();
  const items: any = store.getState().appointments;

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [items])

  if (isLoading) return <Splash />;

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
