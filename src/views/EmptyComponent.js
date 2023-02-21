/* @flow weak */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>WORK IN PROGRESS</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {fontSize: 24, textAlign: 'center'},
});
export default EmptyComponent;
