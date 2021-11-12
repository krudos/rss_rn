import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../App';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomFeed} from '../types';

interface ListItemProps {
  data: CustomFeed;
}

export const FeedRow: FC<ListItemProps> = ({data}) => {
  const navigation = useNavigation();

  const showFeedDetail = useCallback(() => {
    // @ts-ignore
    navigation.navigate(Screen.FeedDetailScreen, {feed: data});
  }, [data, navigation]);
  if (typeof data === 'string') {
    return (
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <Text style={styles.title}>{data}</Text>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={showFeedDetail}>
      <Text style={styles.title}>
        {data.title} ({data.items.length})
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {flex: 1, alignItems: 'center'},
  bottomContainer: {},
  background: {
    flex: 1,
  },
  image: {height: 120},
  button: {marginHorizontal: 40},
  title: {
    fontSize: 24,
    fontWeight: '300',
  },
});
