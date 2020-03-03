import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LeftScreen from './screens/LeftScreen'; // Import a component from another file
import RightScreen from './screens/RightScreen'; // Import a component from another file


//import all the screens we are going to switch 


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="RightScreen"
        barStyle={{backgroundColor: '#0000'}}>
        <Tab.Screen name="LeftScreen" component={LeftScreen} />
        <Tab.Screen name="RightScreen" component={RightScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}