/* @flow weak */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import {Styles} from '../../global';

const SubmitButton = ({submitAction}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={submitAction} style={styles.sbmtBtn}>
        <Text style={styles.sbmtTxt}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  sbmtBtn: {
    height: 64,
    marginTop: 16,
    backgroundColor: '#B0E152',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  sbmtTxt: {fontSize: 16, fontWeight: 'bold', color: 'white'},
});

export default SubmitButton;
