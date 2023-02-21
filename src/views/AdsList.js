/* @flow weak */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Styles, Colors} from '../global';

const AdsList = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.txt}>ADS</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.txt}>ADS</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.txt}>ADS</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: '100%',
    borderRadius: 8,
    height: 150,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  txt: {width: '100%', textAlign: 'center'},
});
export default AdsList;
