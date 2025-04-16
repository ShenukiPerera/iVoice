import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsPage from './SettingsPage';
import AccountPage from './AccountPage';
import HomePage from './HomePage';
import ConversationPage from './ConversationPage';
import TestOutput from './test/TTSOutputTest'

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            // return <Feather name="home" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            // <Feather name="settings" size={24} color="black" />
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1e90ff',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,

        
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
      <Tab.Screen name="Account" component={AccountPage} />
      <Tab.Screen name="Conversation" component={ConversationPage} />
      <Tab.Screen name="TestOutput" component={TestOutput} />
  </Tab.Navigator>
  );
};


export default HomeTabs;
