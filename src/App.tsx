import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import * as rssParser from 'react-native-rss-parser';
import {FeedDetailScreen} from './screens/FeedDetailScreen';

export enum Screen {
  HomeScreen = 'HomeScreen',
  FeedDetailScreen = 'FeedDetailScreen',
}

export type RootStackParamList = {
  [Screen.HomeScreen]: undefined;
  [Screen.FeedDetailScreen]: {feed: rssParser.Feed};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={Screen.HomeScreen} component={HomeScreen} />
        <RootStack.Screen
          name={Screen.FeedDetailScreen}
          component={FeedDetailScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
