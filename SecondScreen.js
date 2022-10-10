import { SafeAreaView, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const SecondScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.text2}>（￣ε￣ʃƪ）</Text>
        <Pressable
            accessibilityLabel = "click for new page"
            style = {styles.button}
            onPress = {() => {
                navigation.pop();
            }}
          >
            <Text style = {styles.text}>Click me to go back!</Text>
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

export default SecondScreen