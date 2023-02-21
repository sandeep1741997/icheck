/* @flow weak */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScoreRating = ({labelTitle, labelValue}) => (
  <View style={styles.container}>
    <Text style={styles.lbl_title}>{labelTitle}</Text>
    <View style={styles.score_btn_bg}>
      <Text style={styles.lbl_vlue}>{labelValue}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    alignItems: 'center',
  },
  score_btn_bg: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: 10,
    backgroundColor: '#DFF4BE',
    width: '50%',
  },
  lbl_title: {
    fontSize: 18,
  },
  lbl_vlue: {
    color: '#80B225',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ScoreRating;
