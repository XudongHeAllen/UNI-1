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
import styles from '../assets/Styles.js';


import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

class LogInScreen extends React.Component {
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
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('CurrentActivitiesScreen')} >LOG IN</Text>
                </TouchableOpacity>
                <Text style={styles.clickableText} onPress={() => this.props.navigation.navigate('SignUpScreen')}>Not a member yet? Sign up!</Text>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

export default LogInScreen;

