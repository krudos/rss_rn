import React, {FC, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {RootStackParamList, Screen} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as rssParser from 'react-native-rss-parser';
import {Separator} from '../components/Separator';
import {FeedRow} from '../components/FeedRow';
import {CustomFeed} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, Screen.HomeScreen>;
const feeds = [
  'https://hackaday.com/blog/feed/',
  'https://www.elotrolado.net/feed/',
];

const getRSS = async (rssUrl: string) => {
  const response = await fetch(rssUrl);
  const responseData = await response.text();
  return await rssParser.parse(responseData);
};

export const HomeScreen: FC<Props> = ({}) => {
  const {feedsData} = useHomeScreen();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedsData}
        renderItem={({item}) => <FeedRow data={item} />}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

const useHomeScreen = () => {
  const [feedsData, setFeedsData] = useState<CustomFeed[]>(feeds);
  useEffect(() => {
    const action = async () => {
      const data = await Promise.all(feeds.map(rssUrl => getRSS(rssUrl)));
      setFeedsData(data);
    };
    action();
  }, []);
  return {feedsData};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
