/* @flow weak */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ViewReportItem = ({
  sliderBgColor,
  sliderColor,
  sliderTitle,
  sliderFillValue,
}) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.report_title}>{sliderTitle}</Text>
      <View
        style={{
          width: '100%',
          backgroundColor: '#EBECF0',
          height: 4,
          marginVertical: 8,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: `${sliderColor}`,
            width: `${sliderFillValue}%`,
          }}></View>
      </View>
      <Text style={styles.report_value}>{`${sliderFillValue}%`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 36,
    paddingHorizontal: 16,
  },
  report_title: {
    fontSize: 18,
  },
  report_value: {
    textAlign: 'right',
    color: '#000000',
    fontSize: 16,
  },
});

export default ViewReportItem;
