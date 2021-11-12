import {FeedItem} from 'react-native-rss-parser';
import React, {FC, useCallback} from 'react';
import {
  Alert,
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

interface PostProps {
  data: FeedItem;
}
export const ArticleRow: FC<PostProps> = ({data}) => {
  const showUrl = useCallback(async () => {
    const url = data.links[0].url;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [data.links]);
  return (
    <View key={data.id}>
      <Text>{data.title}</Text>
      <Text>{data.published}</Text>

      <TouchableOpacity key={data.id} onPress={showUrl} style={styles.button}>
        <Text style={styles.buttonText}>Open</Text>
      </TouchableOpacity>
      <AutoHeightWebView
        style={styles.webView}
        originWhitelist={['*']}
        source={{html: data.description}}
        scalesPageToFit={true}
        viewportContent={'width=device-width, user-scalable=no'}
      />
    </View>
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
  button: {marginHorizontal: 40, backgroundColor: 'blue'},
  buttonText: {
    fontSize: 24,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },
  webView: {width: Dimensions.get('window').width - 15, marginTop: 35},
});
