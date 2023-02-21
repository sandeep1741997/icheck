/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import HeaderLogo from '../../views/HeaderLogo';
import {Styles} from '../../global';
import {AdsList} from '../../views';

const BusinessDashboard = ({navigation}) => {
  console.log('Navigation', navigation);
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <HeaderLogo />
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

export default BusinessDashboard;
