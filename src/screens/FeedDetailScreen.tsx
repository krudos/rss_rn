import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Screen} from '../App';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Separator} from '../components/Separator';
import {ArticleRow} from '../components/ArticleRow';

type Props = NativeStackScreenProps<
  RootStackParamList,
  Screen.FeedDetailScreen
>;

export const FeedDetailScreen: FC<Props> = ({route}) => {
  const {feed} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{feed.title}</Text>
      <FlatList
        data={feed.items}
        renderItem={({item}) => <ArticleRow data={item} />}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
  },
});
