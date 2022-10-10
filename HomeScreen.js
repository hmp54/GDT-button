import { SafeAreaView, View, Pressable, Text, StyleSheet } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.text2}>( ° ͜ʖ °)</Text>
        <Pressable
            style = {styles.button}
            accessibilityLabel = "click for new page"
            onPress = {() => {
                navigation.push('SecondScreen');
            }}
          >
            <Text style = {styles.text}>Click me for a new page!</Text>
        </Pressable>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    button:{
      backgroundColor: '#6ad2fd',
      textDectionStyle: 'none',
      padding: 20,
      marginTop: 10,
      borderRadius: 10
    },
    text:{ 
      color: 'black',
      fontSize: 20,
    },
    text2:{
      fontSize: 20
    }
  });


export default HomeScreen;