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

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
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
        let data = [{
            value: 'Sport',
        }, {
            value: 'Studying',
        }];
        return (
            <View>
                <Dropdown
                    label='Activity type'
                    data={data}
                />

                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <ListItem
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            leftAvatar={{ source: require('../assets/images/Octocat.png') }}
                        />
                    )}
                />
            </View>
        )
    }
}
