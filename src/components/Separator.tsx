import {StyleSheet, View} from 'react-native';
import React from 'react';

export const Separator = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: 'gray',
  },
});
