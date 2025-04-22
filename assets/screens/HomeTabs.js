import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingsPage from './SettingsPage';
import AccountPage from './AccountPage';
import Home1Page from '../screens/Home1Page'; // Make sure this path matches your folder structure
import HomePage from './HomePage';
import ConversationPage from './ConversationPage';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Home1') {
            iconName = focused ? 'globe' : 'globe-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
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
  </Tab.Navigator>
  );
};


=======
    </Tab.Navigator>
  );
};

>>>>>>> Stashed changes
export default HomeTabs;
