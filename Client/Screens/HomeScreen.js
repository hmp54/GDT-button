import { SafeAreaView, View, Pressable, Text, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.musicServiceLogin}>
              <Image style = {styles.musicServiceLogo} source = {require('../assets/applemusic.png')}></Image>
              <Image style = {styles.musicServiceLogo} source = {require('../assets/soundcloud.png')}></Image>
              <Image style = {styles.musicServiceLogo} source = {require('../assets/spotify.png')}></Image>
        </View>
        <View>
          <Pressable
              style = {styles.button}
              accessibilityLabel = "Login"
              onPress = {() => {
                  navigation.push('SignUpScreen');
              }}
            >
            <Text style = {styles.text}>SIGN UP</Text>
          </Pressable>
          <Pressable
              style = {styles.button2}
              accessibilityLabel = "Log in"
              onPress = {() => {
                  navigation.push('LoginScreen');
              }}
            >
              <Text style = {styles.text}>LOG IN</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    button:{
      backgroundColor: '#485CC7',
      textDectionStyle: 'none',
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      width: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button2:{
      textDectionStyle: 'none',
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      width: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{ 
      color: 'white',
      fontSize: 20,
      fontWeight: '600'
    },
    text2:{
      fontSize: 20,
      color: '#fff',
      position: 'absolute',
      bottom: 40
    },
    musicServiceLogin:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10
    },
    musicServiceLogo:{
      width: 50,
      height: 50, 
      margin: 10
    }
  });


export default HomeScreen;