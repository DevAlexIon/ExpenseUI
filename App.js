import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SwiperComponent from './SwiperComponent';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={SwiperComponent}
      />
      <Stack.Screen
        name="Signup"
        options={{headerShown: false}}
        component={Signup}
      />
      <Stack.Screen
        name="Dashboard"
        options={{headerShown: false}}
        component={Dashboard}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{headerShown: false}}
        component={ForgotPassword}
      />
    </Stack.Navigator>
    <Toast />
  </NavigationContainer>
);

export default App;
