import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home/Home.view';
import Poetry from './Poetry/Poetry.view';
import Quotes from './Quotes/Quotes.view';


const Tab = createMaterialBottomTabNavigator();

export default function Footer() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      inactiveColor="#ececec"
      activeColor="#d84c5a"
      barStyle={{backgroundColor: 'black' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={'home'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Poetry"
        component={Poetry}
        options={{
          tabBarLabel: 'Poetry',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pen" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Quotes"
        component={Quotes}
        options={{
          tabBarLabel: 'Quotes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-quote-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
      name="About"
      component={Home}
      options={{
        tabBarLabel: 'About',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={26} />
        ),
      }}
    />

    </Tab.Navigator>
  );
}
