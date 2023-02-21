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
import ScoreRating from '../../views/ScoreRating';
import HeaderLogo from '../../views/HeaderLogo';
import {AdsList} from '../../views';
import {Styles} from '../../global';

const ClientDashboard = ({navigation}) => {
  console.log('Navigation', navigation);
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{width: '100%', alignItems: 'center'}}>
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
          <TouchableOpacity
            style={styles.report_btn_bg}
            onPress={() => navigation.navigate('Reports')}>
            <Text style={styles.report_txt}>{'View Full Report'}</Text>
          </TouchableOpacity>
          <View style={styles.adListHolder}>
            <AdsList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  report_txt: {
    color: '#80B225',
    fontSize: 16,
  },
  adListHolder: {
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 16,
  },
});

export default ClientDashboard;
