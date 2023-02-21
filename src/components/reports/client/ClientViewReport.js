/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Pie from 'react-native-pie';
import {ScoreRating, AdsList, HeaderLogo, ViewReportItem} from '../../../views';
import {Styles} from '../../../global';

const ClientViewReport = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HeaderLogo />
        <ScoreRating labelTitle={'Score Rating'} labelValue={'EXCELLENT'} />
        <View style={styles.progressContainer}>
          <View style={{width: 180, alignItems: 'center'}}>
            <Pie
              radius={120}
              sections={[
                {percentage: 25, color: '#F64500'},
                {percentage: 25, color: '#FFFFFF'},
                {percentage: 25, color: '#85C100'},
                {percentage: 25, color: '#FFB800'},
              ]}
              strokeCap={'butt'}
              innerRadius={65}
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}> 600 </Text>
            </View>
          </View>
        </View>
        <Text style={styles.updtText}>NEXT UPDATE: 7 DAYS</Text>
        <Text style={styles.score_factor}>{'Score Factor'}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.push('ClientReportComp', {typeView: 'Financial'})
          }>
          <ViewReportItem
            sliderTitle={'Financial History'}
            sliderFillValue={90}
            sliderColor={'#F64500'}
            sliderBgColor={''}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.push('ClientReportComp', {typeView: 'Employment'})
          }>
          <ViewReportItem
            sliderTitle={'Employment History'}
            sliderFillValue={70}
            sliderColor={'#85C100'}
            sliderBgColor={''}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.push('ClientReportComp', {typeView: 'Address'})
          }>
          <ViewReportItem
            sliderTitle={'Address History'}
            sliderFillValue={60}
            sliderColor={'#FFB800'}
            sliderBgColor={''}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.push('ClientReportComp', {typeView: 'Derogatory'})
          }>
          <ViewReportItem
            sliderTitle={'Derogatory Report'}
            sliderFillValue={10}
            sliderColor={'#F64500'}
            sliderBgColor={''}
          />
        </TouchableOpacity>
        <View style={styles.adListHolder}>
          <AdsList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    flex: 1,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#676D5A',
    fontSize: 48,
    fontWeight: 'bold',
  },
  updtText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: '#C3C3C3',
    marginTop: 24,
  },
  report_btn_bg: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: 10,
    width: '40%',
    borderColor: '#80B225',
    borderWidth: 2,
  },
  score_factor: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    paddingLeft: 16,
  },
  adListHolder: {
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 16,
  },
});

export default ClientViewReport;
