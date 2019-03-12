import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    FlatList,
    Picker,
    Button,
} from 'react-native';
import styles from '../assets/Styles.js';
import { Dropdown } from 'react-native-material-dropdown';
import { List, ListItem, SearchBar } from "react-native-elements";

export default class CurrentActivitiesScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Current Activities",
            headerRight: (
                <TouchableOpacity

                    onPress={() => navigation.navigate('NewActivityScreen')}
                >
                    <Text style={{fontSize: 30, marginRight: 10, color: "#007aff"}}>+</Text>
                </TouchableOpacity>
            ),
        };
    };

    componentDidMount() {
        console.log("**************1");
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        const url = 'http://ec2-99-79-39-110.ca-central-1.compute.amazonaws.com:8000/activities';
        // this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("**************");
                this.setState({
                    data: page === 1 ? res.activities : [...this.state.data, ...res.activities],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };


    render() {
        let data = [{value: 'Sports'}, {value: 'Study'}, {value: 'Dance'}, {value: 'Politics'}, {value: 'Art'}, {value: 'Music'}];
        return (
            <View>
                <View>
                    <Dropdown style={{flex: 1}}
                        label='Activity type'
                        data={data}
                    />
                    <Dropdown style={{flex: 1}}
                        label='Activity type'
                        data={data}
                    />
                </View>

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <ListItem
                            title={`${item.title} ${item.title}`}
                            subtitle={item.description}
                            leftAvatar={{ source: require('../assets/images/Octocat.png') }}
                            onPress={() => this.props.navigation.navigate('SettingsScreen')}
                        />
                    )}
                />
            </View>
        )
    }
}
