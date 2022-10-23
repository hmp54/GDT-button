import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react'; 
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
  {/*//launches database server on initialization of app.
  //empty array list ensure that this codeo only executes once 
  const [count, setCount] = useState(0); 
  useEffect(() =>{
    const onFocus = () => {
      console.log('hello world'); 
    }
    const focusListener = EventRegister.addEventListener('didFocus', onFocus); 
    return () => focusListener.remove(); 
  }, []); */}

  const express = require('express'); 
  const mysql = require('mysql');

  const app = express(); 
  app.listen('3000', () =>{ 
      console.log('server started on port 3000'); 
  }); 

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
