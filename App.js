import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import HomeScreen from './HomeScreen'; 
import SecondScreen from './SecondScreen';

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
            <Stack.Screen name = 'SecondScreen' component = {SecondScreen}/>
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
