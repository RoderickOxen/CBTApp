import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LeftScreen from './screens/LeftScreen'; 
import RightScreen from './screens/RightScreen'; 
import Home from './screens/Home'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



//import all the screens we are going to switch 
const Tab = createMaterialTopTabNavigator();

export default function App()  {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting = "true"
        tabBarPosition="bottom">
        <Tab.Screen name="LeftScreen" component={LeftScreen} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="RightScreen" component={RightScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}