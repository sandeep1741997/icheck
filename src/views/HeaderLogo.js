/* @flow weak */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderLogo = () => (
  <View style={styles.container}>
    <Text style={styles.txtlbl}>{'icheck'}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtlbl: {
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
  },
});

export default HeaderLogo;
