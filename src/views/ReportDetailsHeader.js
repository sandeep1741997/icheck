/* @flow weak */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Styles, Colors} from '../global';

const ReportDetailsHeader = ({item_header, viewType}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={Styles.flxRow}>
          <View>
            <Text style={styles.headr_Title}>{item_header.header_title}</Text>
          </View>
          <View style={Styles.mgLftAuto}>
            <Text style={styles.headr_Title}>{'>'}</Text>
          </View>
        </View>
        {/* <Slider
          style={{height: 40}}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor={'#EBECF0'}
          value={item_header.header_slider_val}
          disabled
          minimumTrackTintColor={item_header.header_slider_color}
          maximumTrackTintColor={item_header.header_slider_bg_color}
        /> */}

        <View
          style={{
            width: '100%',
            backgroundColor: `${item_header.header_slider_color}`,
            height: 4,
            marginVertical: 8,
          }}
        />
        <View>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flexDirection: 'row', flex: 0.5}}>
              <Text style={styles.subInfo}>
                {viewType === 'Financial' ? 'Owing: ' : 'Status: '}
              </Text>
              <Text style={styles.subInfoStatus}>
                {viewType === 'Financial'
                  ? item_header.header_owing
                  : item_header.header_status}
              </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 0.5}}>
              <Text
                style={
                  styles.subInfo
                }>{`Last Reported: ${item_header.header_last_reported}`}</Text>
            </View>
          </View>
          {/* <View style={Styles.flxRow}>
            <View style={Styles.flxRow}>
            </View>
            <View style={Styles.flxAlgnRgt}>
            </View>
          </View> */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'stretch',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 18,
  },
  headr_Title: {
    fontSize: 18,
    color: '#303030',
  },
  report_value: {
    textAlign: 'right',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subInfo: {
    fontSize: 16,
    color: '#808080',
  },
  subInfoStatus: {
    fontSize: 16,
    color: 'green',
  },
});

export default ReportDetailsHeader;
