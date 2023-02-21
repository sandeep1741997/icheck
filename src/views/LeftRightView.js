/* @flow weak */
import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../global/Styles';

const LeftRightView = ({leftLabel, rightLabel, leftLblStyl, rightLblStyl}) => (
  <View style={Styles.flxRow}>
    <View style={Styles.flxRow}>
      <Text style={leftLblStyl}>{leftLabel}</Text>
    </View>
    <View style={Styles.flxAlgnRgt}>
      <Text style={rightLblStyl}>{rightLabel}</Text>
    </View>
  </View>
);

export default LeftRightView;
