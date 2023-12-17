import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {Archive, Home, Settings, Trash} from './screens';

const Navigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: 'cog',
        }}
      />
      <Tab.Screen
        name="Archive"
        component={Archive}
        options={{
          tabBarLabel: 'Archive',
          tabBarIcon: 'archive',
        }}
      />
      <Tab.Screen
        name="trash"
        component={Trash}
        options={{
          tabBarLabel: 'Trash',
          tabBarIcon: 'trash-can',
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
