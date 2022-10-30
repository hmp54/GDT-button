import {View, StyleSheet, SafeAreaView, Text, Button, TextInput, Image, SliderComponent } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik';
import Validator from 'email-validator';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Axios from 'axios'; 

const LoginScreen = ({navigation}) => {
    //variables + functions that will send user info to the server side/mySQL database  
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState(""); 
    const [username, setUserName] = useState(""); 
    const [password, setPassword] = useState(""); 

    //sends user information from the front end to the back end 
    //axios library makes it easy to make routes
    const addUser = () =>{
        Axios.post('http://localhost:3000/create', {
            email: email, 
            username: username, 
            password: password
        }).then(() =>{
            console.log("Successfully added new user info to server"); 
        })
    }
    //form validation - makes sure that all required information is given by the user before submitting
    require('yup-phone');
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
                phoneNumber: '',
                email: '',
                username: '',
                password: '',
            }}
            onSubmit = {async (values) => {
                //calls functions to set all user information upon hitting the "submit" button
                await new Promise((r) => setTimeout(r, 500));
                setPhoneNumber(values.phoneNumber); 
                setEmail(values.email);
                setUserName(values.username); 
                setPassword(values.password);
                addUser(); 
            }}
            validationSchema={signupFormSchema}
            validationOnMount={true}
        >
           {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
                <View style = {styles.inputField}>
                    <TextInput
                        placeholderTextColor = "#555"
                        placeholder = 'Phone number'
                        autoCapitalize = 'none'
                        keyboardType = 'number-pad'
                        textContextType = 'telephoneNumber'
                        autoFocus = {true}
                        style = {{color: 'white'}}
                        onChangeText = {handleChange('phoneNumber')}
                        onBlur = {handleBlur('phoneNumber')}
                        value = {values.phoneNumber}
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
                <Pressable style = {styles.submit} onPress = {handleSubmit}><Text style = {styles.text1}>Submit</Text></Pressable>
                
                {/*Just some things for development purposes - shows what is being submitted to tyhe back end*/}
                <Text style = {styles.text1}>PHONE NUMBER: {phoneNumber}</Text>
                <Text style = {styles.text1}>EMAIL: {email}</Text>
                <Text style = {styles.text1}>USERNAME: {username}</Text>
                <Text style = {styles.text1}>PASSWORD: {password}</Text>
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
    },
    text1:{
        color: 'white',    
    }, 
    submit: {
        backgroundColor: '#485CC7',
        padding: 10,
        margin: 10,
        borderRadius: 10
    }
}); 

export default LoginScreen