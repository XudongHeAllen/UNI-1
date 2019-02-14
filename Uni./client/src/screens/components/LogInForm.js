import React from 'react';
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
    StatusBar
} from 'react-native';
import styles from '../../assets/Styles.js';
import { WebBrowser } from 'expo';

import { MonoText } from '../../components/StyledText';
import {StackNavigator} from 'react-navigation';

export default class LogInForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    static navigationOptions = {
        title: 'LoginForm'
    };

    handleEmail = (text) => {
        this.setState({ email: text })
    };

    handlePassword = (text) => {
        this.setState({ password: text })
    };

    submitInformation = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    };


    render() {
        return(
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
                    onChangeText = {this.handleEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    placeholderTextcolor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    onChangeText = {this.handlePassword}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >LOG IN</Text>
                </TouchableOpacity>
                <Text style={styles.clickableText} onPress={() => Linking.openURL('google.com')}>Not a member yet? Sign up!</Text>
            </View>
        )
    }
}

