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

export default class CurrentActivitiesScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/images/activityIcon.png")}></Image>
                <Text>There are no Current Activities</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4db0f2',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    imageContainter: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 30
    }
});