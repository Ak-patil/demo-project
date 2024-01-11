import React, {useMemo} from 'react';
import {View, Text, Button} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer, useLinkTo} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const linking = {
  config: {
    screens: {
      HomeStack: {
        path: 'stack',
        initialRouteName: 'Home',
        screens: {
          Home: 'home',
          Profile: {
            path: 'user/:id/:age',
            parse: {
              id: id => `there, ${id}`,
              age: Number,
            },
            stringify: {
              id: id => id.replace('there, ', ''),
            },
          },
        },
      },
      Settings: 'settings',
    },
  },
};

const Home = ({navigation}) => {
  const linkTo = useLinkTo();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Wojciech's profile"
        onPress={() => linkTo('/stack/user/Wojciech/22')}
      />
      <Button
        title="Go to unknown profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const Profile = ({route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello {route.params?.id || 'Unknown'}!</Text>
      <Text>
        Type of age parameter is{' '}
        {route.params?.age ? typeof route.params.age : 'undefined'}
      </Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the Settings Page.</Text>
    </View>
  );
};

const MyStack = createStackNavigator();

const HomeStack = () => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="Profile" component={Profile} />
    </MyStack.Navigator>
  );
};

const MyTabs = createBottomTabNavigator();

export default function App() {
  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      tabBarIcon: () => null,
    }),
    [],
  );
  return (
    <NavigationContainer linking={linking}>
      <MyTabs.Navigator screenOptions={screenOptions}>
        <MyTabs.Screen name="HomeStack" component={HomeStack} />
        <MyTabs.Screen name="Settings" component={Settings} />
      </MyTabs.Navigator>
    </NavigationContainer>
  );
}
