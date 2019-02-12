import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LogInScreen from '../screens/LogInScreen';
import LogInForm from '../screens/components/LogInForm';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Main: MainTabNavigator,
  Main: LogInScreen,
}));