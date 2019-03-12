const dateFormat = require('dateformat');

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

export default class ActivityDetailsScreen extends React.Component {
    render() {
        console.log(this.props);
        const { navigation } = this.props;
        console.log(navigation.getParam("test"))
        return (
            <View style={styles.currActContainer}>
                <Text style={styles.title}>{navigation.getParam("test")}</Text>
                <Text>Activity Name</Text>
                
                <Image style={styles.logo} source={require("../assets/images/sportIcon.png")}></Image>
                <Text>Event Type: Sport</Text>
                <Text>Time of Event: {dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM TT")}</Text>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('CurrentActivitiesScreen')}>Join Activity</Text>
                </TouchableOpacity>
            </View>
        )
    }
}