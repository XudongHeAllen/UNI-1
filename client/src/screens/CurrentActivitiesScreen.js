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
        let activityTypes = [{value: 'Sports'}, {value: 'Study'}, {value: 'Dance'}, {value: 'Politics'}, {value: 'Art'}, {value: 'Music'}];
        let sortByCriteria = [{value: 'Time'}, {value: 'Location'}];
        return (
            <View style={{flex: 1}}>
                <View style={styles.dropdown}>
                    <View style={{ flex: 1 }}>
                        <Dropdown
                            label='Activity Type'
                            data={activityTypes}
                        />
                    </View>

                    <View style={{ width: 96, marginLeft: 8 }}>
                        <Dropdown
                            label='Sort'
                            data={sortByCriteria}
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
<<<<<<< HEAD
                            onPress={() => this.props.navigation.navigate('ActivityDetailsScreen', {test: 1, me: "Buhle"})}
=======
                            onPress={() => this.props.navigation.navigate('SettingsScreen',
                            {
                                activity_datetime: item.activity_datetime,
                                category: item.category,
                                description: item.description,
                                max_attendance: item.max_attendance,
                                title: item.title,
                                attendance_list: item.attendance_list,
                                datetime_created: item.datetime_created,
                            })}
>>>>>>> current_activities_screen
                        />
                    )}
                />
            </View>
        )
    }
}
