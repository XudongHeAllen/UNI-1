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

export default class CurrentActivitiesScreen extends React.Component {
    render() {
        return (
            <View style={styles.currActContainer}>
                <Image style={styles.logo} source={require("../assets/images/activityIcon.png")}></Image>
                <Text>There are no Current Activities</Text>
            </View>
        )
    }
}
