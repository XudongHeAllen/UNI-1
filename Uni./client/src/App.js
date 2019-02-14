import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from "./screens/LogInScreen";
import CurrentActivitiesScreen from "./screens/CurrentActivitiesScreen";


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
});

const AppRoot = createAppContainer(MainNavigator);
export default AppRoot;


const styles = StyleSheet.create({
  logInContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
