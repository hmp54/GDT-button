import {StyleSheet} from 'react-native';
import React, {useState} from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import {EventRegister} from 'react-native-event-listeners'; 
import HomeScreen from './Screens/HomeScreen'; 
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen.js'; 

//creates screen navigation that the app is based on 
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={screenOptions}
        initialRouteName = 'HomeScreen'>
            <Stack.Screen name = 'HomeScreen'component = {HomeScreen}/>
            <Stack.Screen name = 'LoginScreen' component = {LoginScreen}/>
            <Stack.Screen name = 'SignUpScreen' component = {SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
