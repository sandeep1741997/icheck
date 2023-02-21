/* @flow weak */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {LeftRightView, YearlyReport} from '.';
import {Styles, Colors} from '../global';

const ReportDetailsBody = ({item, viewType, RedirectToSubmitDisputeForm}) => {
  console.log('ReportDetailsBody', item, viewType);

  const getPerfRatngClrCntr = val => {
    if (val === '5') {
      return {
        backgroundColor: Colors.pckGreenLight,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 2,
        paddingVertical: 4,
      };
    }
    if (val === '4' || val === '3') {
      return {
        backgroundColor: Colors.yellowLight,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 2,
        paddingVertical: 4,
      };
    }
    if (val === '2' || val === '1') {
      return {
        backgroundColor: Colors.redLight,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 2,
        paddingVertical: 4,
      };
    }
  };

  const getPerfRatngClrTx = val => {
    if (val === '5') {
      return {color: Colors.pckGreendark, fontSize: 12};
    }
    if (val === '4' || val === '3') {
      return {color: Colors.yellowDark, fontSize: 12};
    }
    if (val === '2' || val === '1') {
      return {color: Colors.redDark, fontSize: 12};
    }
  };

  if (viewType === 'Financial') {
    return (
      <View style={styles.container}>
        <View>
          <LeftRightView
            leftLblStyl={styles.addressInfoTxt}
            rightLblStyl={styles.addressInfoTxt}
            leftLabel={`Agreed monthly payment: ${item.Agreed_monthly_payment}`}
            rightLabel={`Total Debit: ${item.total_debit}`}
          />
          <LeftRightView
            leftLblStyl={styles.addressInfoTxt}
            rightLblStyl={styles.addressInfoTxt}
            leftLabel={`Amount Past Due: ${item.amount_past_due}`}
            rightLabel={`Payment status: ${item.payment_status}`}
          />
          <Text style={styles.finPymtTtl}>{'Payment History'}</Text>
          <YearlyReport paymentHistory={item.payment_history} />
          <Text style={styles.finCredCntDetTxt}>
            {'Creditor Contact Details'}
          </Text>
          <Text style={styles.finCredCntDetTxt}>
            {item.creditor_contact_name}
          </Text>
          <Text style={styles.finCredCntDet}>
            {item.creditor_contact_details}
          </Text>
          <TouchableOpacity
            onPress={RedirectToSubmitDisputeForm}
            style={[
              Styles.flxRow,
              styles.empDisputeBtnRoot,
              Styles.mgTop16,
              Styles.pdngV12,
            ]}>
            <View style={Styles.flxRow}>
              <Text style={styles.empDisputeInfo}>{`To raise dispute `}</Text>
            </View>
            <View style={Styles.flxAlgnRgt}>
              <Text style={styles.empDisputeRedirect}>{'CLICK HERE'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  if (viewType === 'Employment') {
    return (
      <View style={[styles.container]}>
        <View style={Styles.flxDir}>
          <View style={Styles.flxDir}>
            <Text
              style={
                styles.addressInfoTxt
              }>{`Start Date:  ${item.start_date}`}</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.addressInfoTxt}>
              {`End Date ${item.end_date}`}
            </Text>
          </View>
        </View>
        <View style={[Styles.flxDir, {flex: 5}]}>
          <View style={styles.empViewLeft}>
            <Text style={styles.empReportTitle}>{'Performance Rating'}</Text>
            <View style={getPerfRatngClrCntr(item.performance.task_del)}>
              <Text
                style={getPerfRatngClrTx(
                  item.performance.task_del,
                )}>{`Task Delivery- ${item.performance.task_del}`}</Text>
            </View>
            <View style={getPerfRatngClrCntr(item.performance.attendence)}>
              <Text
                style={getPerfRatngClrTx(
                  item.performance.attendence,
                )}>{`Attendence- ${item.performance.attendence}`}</Text>
            </View>
            <View style={getPerfRatngClrCntr(item.performance.work_quality)}>
              <Text
                style={getPerfRatngClrTx(
                  item.performance.work_quality,
                )}>{`Work Quality- ${item.performance.work_quality}`}</Text>
            </View>
            <View style={getPerfRatngClrCntr(item.performance.efficiency)}>
              <Text
                style={getPerfRatngClrTx(
                  item.performance.efficiency,
                )}>{`Efficiency- ${item.performance.efficiency}`}</Text>
            </View>
          </View>
          <View style={styles.empViewRght}>
            <Text style={styles.empReportTitle}>
              {'Employer Contact Details'}
            </Text>
            <View>
              <Text style={styles.addressInfoTxt}>
                {item.employer_contact_details}
              </Text>
            </View>
            <TouchableOpacity
            onPress={RedirectToSubmitDisputeForm}
              // onPress={() => {}}
              style={[Styles.flxRow, styles.empDisputeBtnRoot]}>
              <View style={Styles.flxRow}>
                <Text style={styles.empDisputeInfo}>{`To raise dispute `}</Text>
              </View>
              <View style={Styles.flxAlgnRgt}>
                <Text style={styles.empDisputeRedirect} onPress={RedirectToSubmitDisputeForm}>{'CLICK HERE'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  if (viewType === 'Address') {
    return (
      <View style={styles.container}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={
                  styles.addressInfoTxt
                }>{`Start Date:  ${item.start_date}`}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
              <Text style={styles.addressInfoTxt}>
                {`End Date ${item.end_date}`}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={styles.addressInfoTxt}>{`Address ${item.address}`}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={
                  styles.addressInfoTxt
                }>{`City/Town ${item.city_town}`}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
              <Text style={styles.addressInfoTxt}>
                {`Postal Code ${item.postal_code}`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  if (viewType === 'Derogatory') {
    return (
      <View style={styles.container}>
        <View>
          <LeftRightView
            leftLblStyl={styles.addressInfoTxt}
            rightLblStyl={styles.addressInfoTxt}
            leftLabel={`Agreed monthly payment: ${item.Agreed_monthly_payment}`}
            rightLabel={`Total Debit: ${item.total_debit}`}
          />
          <LeftRightView
            leftLblStyl={styles.addressInfoTxt}
            rightLblStyl={styles.addressInfoTxt}
            leftLabel={`Amount Past Due: ${item.amount_past_due}`}
            rightLabel={`Payment status: ${item.payment_status}`}
          />
          <Text style={styles.finPymtTtl}>{'Payment History'}</Text>
          <YearlyReport paymentHistory={item.payment_history} />
          <Text style={styles.finCredCntDetTxt}>
            {'Creditor Contact Details'}
          </Text>
          <Text style={styles.finCredCntDetTxt}>
            {item.creditor_contact_name}
          </Text>
          <Text style={styles.finCredCntDet}>
            {item.creditor_contact_details}
          </Text>
          <TouchableOpacity
            onPress={RedirectToSubmitDisputeForm}
            style={[
              Styles.flxRow,
              styles.empDisputeBtnRoot,
              Styles.mgTop16,
              Styles.pdngV12,
            ]}>
            <View style={Styles.flxRow}>
              <Text style={styles.empDisputeInfo}>{`To raise dispute `}</Text>
            </View>
            <View style={Styles.flxAlgnRgt}>
              <Text style={styles.empDisputeRedirect}>{'CLICK HERE'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'stretch',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  report_title: {
    fontSize: 18,
  },
  report_value: {
    textAlign: 'right',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  addressInfoTxt: {
    fontSize: 14,
    color: '#808080',
    marginTop: 4,
  },
  empViewLeft: {
    flex: 2,
    flexDirection: 'column',
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    marginRight: 4,
    padding: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  empViewRght: {
    flex: 3,
    flexDirection: 'column',
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    marginLeft: 4,
    padding: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexWrap: 'wrap',
  },
  empReportTitle: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'white',
    paddingVertical: 4,
  },

  empDisputeBtnRoot: {
    backgroundColor: Colors.pckGreenLight,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
  },
  empDisputeInfo: {
    fontSize: 12,
    color: Colors.pckGreendark,
  },
  empDisputeRedirect: {
    fontSize: 12,
    color: 'red',
  },

  finPymtTtl: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: '400',
  },
  finCredCntDetTxt: {marginTop: 20, fontWeight: '600', fontSize: 16},
  finCredCntDet: {fontSize: 16, color: '#808080', marginTop: 8},
});

export default ReportDetailsBody;
