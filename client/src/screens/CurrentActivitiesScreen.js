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
import ActivityDetailsScreen  from './ActivityDetailsScreen';
import * as App from '../App';

// const URL = 'http://ec2-99-79-39-110.ca-central-1.compute.amazonaws.com:8000';

export default class CurrentActivitiesScreen extends React.Component {
    token  = "";
    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const USER_DETAILS = {
            email : navigation.getParam("email"),
            token : navigation.getParam("token")
        };
        console.log("TOKEN: " + USER_DETAILS.token);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            selectedCategory: "",
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Current Activities",
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('NewActivityScreen', {token: this.token})}>
                    <Text style={{fontSize: 30, marginRight: 10, color: "#007aff"}}>+</Text>
                </TouchableOpacity>
            ),
        };
    };

    componentDidMount() {
        this.makeRemoteRequest();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedCategory !== prevState.selectedCategory && this.state.selectedCategory !== "") {
            this.onChangeTypeHandler(this.state.selectedCategory);
        }
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        // this.setState({ loading: true });

        fetch(App.URL + '/activities')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.activities : [...this.state.data, ...res.activities],
                    error: res.error || null,
                    loading: false,
                    refreshing: false,

                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            }
        );
    };

    onChangeTypeHandler(value) {
        const { page, seed } = this.state;
        //TODO: update the list of all activities;
        fetch(App.URL + '/activities/activity/sortBy/' + value)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.activities : [...this.state.data, ...res.activities],
                    error: res.error || null,
                    loading: false,
                    refreshing: false,
                    selectedCategory: this.state.selectedCategory,
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    onChangeSortByHandler(value) {
        //TODO: update the list of all activities
    };


    render() {
        // const { navigation } = this.props;
        // const USER_DETAILS = {
        //     email : navigation.getParam("email"),
        //     token : navigation.getParam("token")
        // };
        // console.log("TOKEN: " + USER_DETAILS.token);

        let activityTypes = [{value: 'Sports'}, {value: 'Study'}, {value: 'Dance'}, {value: 'Politics'}, {value: 'Art'}, {value: 'Music'}];
        let sortByCriteria = [{value: 'Time'}];
        return (
            <View style={{flex: 1}}>
                <View style={styles.dropdown}>
                    <View style={{ flex: 1 }}>
                        <Dropdown
                            label='Activity Type'
                            data={activityTypes}
                            // onChangeText={value => {this.componentDidUpdate(this.props)}}
                            onChangeText={value => this.setState({selectedCategory: value})}
                        />
                    </View>

                    <View style={{ width: 96, marginLeft: 8 }}>
                        <Dropdown
                            label='Sort'
                            data={sortByCriteria}
                            onChangeText={value => this.onChangeSortByHandler(value)}
                            propsExtractor={({ props }, index) => props}
                        />
                    </View>
                </View>

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <ListItem
                            title={`${item.title} ${item.title}`}
                            subtitle={item.description}
                            leftAvatar={{ source: require('../assets/images/Octocat.png') }}
                            onPress={() => this.props.navigation.navigate('ActivityDetailsScreen',
                                {
                                    activity_datetime: item.activity_datetime,
                                    category: item.category,
                                    description: item.description,
                                    max_attendance: item.max_attendance,
                                    title: item.title,
                                    attendance_list: item.attendance_list,
                                    datetime_created: item.datetime_created,
                                })}
                        />
                    )}
                />

            </View>
        )
    }
}