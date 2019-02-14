import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView
} from 'react-native';
import styles from '../assets/Styles.js';

import LogInForm from './components/LogInForm';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

class LogInScreen extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.logInContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/images/Octocat.png')}/>
                    <Text style={styles.title} onPress={() => this.props.navigation.navigate('CurrentActivitiesScreen')} >Uni.</Text>
                </View>
                <View>
                    <LogInForm/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default LogInScreen;

