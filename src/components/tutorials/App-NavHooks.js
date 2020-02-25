import React, { Component } from 'react'
import { View } from 'react-native'
import Blank from './src/Components/Blank'
import PersonList from './src/Components/PersonList'
import HookCounter from './src/Components/HookCounter'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator(
  {
		Counter: HookCounter,
		Contacts: PersonList,
    Dummy: Blank
  },
  {
		initialRouteName: 'Counter',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      // <PersonList/>
      <AppContainer/>
      // <HookCounter/>
    );
  }
}
export default App;
