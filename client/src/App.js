import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from "./screens/LogInScreen";
import CurrentActivitiesScreen from "./screens/CurrentActivitiesScreen";
import SignUpScreen from './screens/SignUpScreen';
import SettingsScreen from "./screens/SettingsScreen";
import NewActivityScreen from "./screens/NewActivityScreen";


class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <MainNavigator/>
    )
  }
}

const MainNavigator = createStackNavigator({
  LoginScreen: LoginScreen,
  CurrentActivitiesScreen: CurrentActivitiesScreen,
  SignUpScreen: SignUpScreen,
  SettingsScreen: SettingsScreen,
  NewActivityScreen: NewActivityScreen,
});

const AppRoot = createAppContainer(MainNavigator);
export default AppRoot;


const styles = StyleSheet.create({
  logInContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
