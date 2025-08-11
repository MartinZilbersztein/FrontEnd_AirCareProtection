import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer, StackActions, createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Historial from './screens/Historial';
import Ajustes from './screens/Ajustes';
import Scenes from './screens/Scenes';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

function LoginStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Iniciar sesión" component={Login}/>
      <Stack.Screen name="Registrar" component={Register}/>
    </Stack.Navigator>
  );
}

function AppStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Historial" component={Historial}/>
      <Stack.Screen name="Ajustes" component={Ajustes}/>
      <Stack.Screen name="Scenes" component={Scenes}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Scenes" component={Scenes}/>
      <Tab.Screen name="Historial" component={Historial}/>
      <Tab.Screen name="Ajustes" component={Ajustes}/>
    </Tab.Navigator>
  )
}

export default function App() {
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack/> : <LoginStack/> }
    </NavigationContainer>
  );
}