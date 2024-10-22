import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Links',
    };

    render() {
        return (
            <ScrollView style={styles.logInContainer}>
                {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
                <ExpoLinksView />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    logInContainer: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});