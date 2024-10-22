import React from 'react';
import {AsyncStorage} from 'react-native';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    KeyboardAvoidingView,
    StatusBar,
    Alert,
} from 'react-native';
import styles from '../assets/Styles.js';
import * as App from '../App';


import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class LogInScreen extends React.Component {
    state = {
        email: "supman@myumanitoba.ca",
        password: "supping",
        token: "",
    };


    onSubmit() {
        const { email, password } = this.state;
        if (email !== "" && password !== "") {
            if (email.endsWith("@myumanitoba.ca")) {
                console.log("link: " + App.URL + "/users/signin");
                fetch(App.URL + "/users/signin", {
                    method: "POST",
                    body:  JSON.stringify({"email": email, "password": password}),
                    headers: {
                        'Accept':       'application/json',
                        'Content-Type': 'application/json'
                        
                    }
                })
                    .then(res => res.json())
                    .then(response => {
                        console.log("response: " +typeof response.success);
                        if (response.success === true) {
                            this.setState({token: response.token});
                            AsyncStorage.setItem("AuthToken", response.token)
                            this.props.navigation.navigate('CurrentActivitiesScreen', {
                                email: this.state.email,
                                token: this.state.token,
                            });
                        }
                        else {
                            Alert.alert("Invalid email or password!");
                        }
                    }
                )
            }
            else {
                Alert.alert("Please use your @myumanitoba.ca email!");
            }
        }
        else {
            Alert.alert("Please enter your email and password!");
        }
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.logInContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/images/Octocat.png')}/>
                    <Text style={styles.title} >Uni.</Text>
                </View>
                <View style={styles.logInFormContainer}>
                <StatusBar barStyle="light-content"/>
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText = {text => this.setState({email: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    onChangeText = {text => this.setState({password: text})}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => this.onSubmit()} >LOG IN</Text>
                </TouchableOpacity>
                <Text style={styles.clickableText} onPress={() => this.props.navigation.navigate('SignUpScreen')}>Not a member yet? Sign up!</Text>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

