import { View, StyleSheet, SafeAreaView, Text, Button, TextInput, Image } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik';
import Validator from 'email-validator';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const LoginScreen = ({navigation}) => {
    const signupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'), 
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'Your password has to be at least 8 characters')
    })

    return (
    <SafeAreaView style = {styles.container}>
        <View> 
           <Pressable onPress = {() =>{navigation.goBack()}}>
                <Image source = {require('../assets/left-arrow.png')}
                style = {styles.header}/>
            </Pressable>
        </View>
        <Text style = {styles.header}>LOG IN</Text>
        <Formik initialValues = {{
                email: '',
                password: '',
                username: '',
            }}
            onSubmit = { values => {
              console.log(values); 
            }}
            validationSchema={signupFormSchema}
            validationOnMount={true}
        >
           {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
                <View>
                    <TextInput
                        onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    />
                </View>
                <View style = {[styles.inputField, 
                    {borderColor: values.email.length < 1 || Validator.validate(values.email) 
                        ? '#444' 
                        : '#ff3237'}
                ]}>
                    <TextInput
                        placeholderTextColor = "#555"
                        placeholder = 'Email'
                        autoCapitalize = 'none'
                        keyboardType = 'email-address'
                        textContextType = 'emailAddress'
                        autoFocus = {true}
                        style = {{color: 'white'}}
                        onChangeText = {handleChange('email')}
                        onBlur = {handleBlur('email')}
                        value = {values.email}
                        />
                </View>
                <View style = {[styles.inputField, 
                    {borderColor: values.username.length < 1 || values.username.length > 6
                        ? '#444' 
                        : '#ff3237'}
                ]}>
                    <TextInput
                        placeholderTextColor = "#555"
                        placeholder = 'Username'
                        autoCapitalize = 'none'
                        textContextType = 'username'
                        autoFocus = {true}
                        style = {{color: 'white'}}
                        onChangeText = {handleChange('username')}
                        onBlur = {handleBlur('username')}
                        value = {values.username}
                        />
                </View>
                <View style = {[styles.inputField, { 
                    borderColor: 1 > values.password.length || values.password.length > 7
                        ? '#444'
                        :'#ff3237'}
                ]}>
                    <TextInput
                        placeholderTextColor = "#555"
                        placeholder = 'Password'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        secureTextEntry = {true}
                        textContentType = 'password'
                        style = {{color: 'white'}}
                        onChangeText = {handleChange('password')}
                        onBlur = {handleBlur('password')}
                        value = {values.password}
                    />
                </View>
                <Button onPress={handleSubmit} title="Submit"/>
            </>

            )}
        </Formik>
    </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      header:{
        color: '#FFF',
        fontSize: 40,
        fontWeight: '700',
        letterSpacing: 2
      },
      inputField: {
        borderRadius: 4,
        padding: 12, 
        backgroundColor: '#222222',
        marginBottom: 10, 
        borderWidth: 1, 
        width: '90%',
        borderColor: '#444',
    },
    header: {
        height: 20,
        width: 20
    }
}); 

export default LoginScreen