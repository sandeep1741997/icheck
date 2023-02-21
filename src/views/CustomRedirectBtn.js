/* @flow weak */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Styles, Colors} from '../global';

const CustomRedirectBtn = props => {
  return (
    <TouchableOpacity
      onPress={props.clickAction}
      style={[Styles.flxRow, styles.container]}>
      <View style={Styles.flxRow}>
        <Text
          style={
            styles.redirectInfo
          }>{`To add new ${props.viewType} please `}</Text>
      </View>
      <View style={Styles.flxAlgnRgt}>
        <Text style={styles.redirectBtnTxt}>{'CLICK HERE'}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pckGreenLight,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  redirectInfo: {
    fontSize: 16,
    color: Colors.pckGreendark,
  },
  redirectBtnTxt: {
    fontSize: 16,
    color: 'red',
  },
});
export default CustomRedirectBtn;
