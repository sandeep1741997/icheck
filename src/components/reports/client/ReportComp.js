/* @flow weak */
import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ScoreRating from '../../../views/ScoreRating';
import HeaderLogo from '../../../views/HeaderLogo';
import ReportListComp from './ReportListComp';
import { CustomRedirectBtn } from '../../../views';

const ReportComp = props => {

  const reportType = props.route.params.typeView;
  const isFooterAvail = reportType === 'Employment' || reportType === 'Address';

  const redirectToSubmssionPage = () => {
    if (reportType === 'Employment') {
      return props.navigation.push('AddEmployerForm', {
        typeView: 'Employement',
      });
    }
    if (reportType === 'Address') {
      return props.navigation.push('AddAddressForm', { typeView: 'Address' });
    }
  };

  const RedirectToSubmitDisputeForm = () => {
    props.navigation.push('SubmitDisputeForm')
  }
  
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        style={isFooterAvail ? styles.scrollWdFooter : styles.scrollWOFooter}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HeaderLogo />
        <ScoreRating
          labelTitle={`${props.route.params.typeView} History`}
          labelValue={'80%'}
        />
        <ReportListComp
          viewType={props.route.params.typeView}
          RedirectToSubmitDisputeForm={RedirectToSubmitDisputeForm}

        />
      </ScrollView>
      {isFooterAvail && (
        <View style={styles.footerContainer}>
          <CustomRedirectBtn
            clickAction={redirectToSubmssionPage}
            viewType={props.route.params.typeView}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  scrollWdFooter: { width: '100%', height: '100%', flex: 0.9 },
  scrollWOFooter: { width: '100%', height: '100%', flex: 1 },
  footerContainer: {
    flex: 0.1,
    width: '100%',
    justifyContent: 'center',
  },
});

export default ReportComp;
