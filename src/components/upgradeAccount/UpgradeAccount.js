/* @flow weak */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors, Constants} from '../../global';
import SelectDropdown from 'react-native-select-dropdown';

const UpgradeAccount = ({navigation}) => {
  const [nin, setNin] = useState('');
  const [password, setPassword] = useState('');
  const [businessType, setBusinessType] = useState(1);
  const [planType, setPlanType] = useState({title: ''});

  const userRoles = [
    {
      title: 'Solo',
      value: '$1',
      terms: 'One Time Use',
      runReport: '1x',
      bizTrnsc: '2x',
      bizOwnrLsnc: '---',
      trialPeriod: '15 days',
      techSupport: 'Regular',
    },
    {
      title: 'Team',
      value: '$4',
      terms: '5 Users/month',
      runReport: '5x',
      bizTrnsc: '10x',
      bizOwnrLsnc: '2',
      trialPeriod: '30 days',
      techSupport: '24 x 7',
    },
    {
      title: 'Enterprise',
      value: '$9',
      terms: 'Per User/Per Month',
      runReport: 'Unlimited',
      bizTrnsc: 'Unlimited',
      bizOwnrLsnc: '10',
      trialPeriod: '90 days',
      techSupport: 'Dedicated',
    },
  ];

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.dataContainer}>
        <Text style={styles.settingLbl}>SELECT PLAN</Text>
        <View style={styles.busnssTypPnl}>
          <TouchableOpacity
            onPress={() => {
              setBusinessType(1);
            }}
            style={styles.radioOutr}>
            {businessType === 1 ? <View style={styles.radioInnr} /> : null}
          </TouchableOpacity>
          <Text style={{marginLeft: 8, fontWeight: '500'}}>{'MONTHLY'}</Text>
          <View
            style={{
              height: '100%',
              width: 2,
              backgroundColor: '#00B93F',
              marginHorizontal: 8,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setBusinessType(2);
            }}
            style={[styles.radioOutr]}>
            {businessType === 2 ? <View style={styles.radioInnr} /> : null}
          </TouchableOpacity>
          <Text style={{marginLeft: 8, fontWeight: '500'}}>{'ANNUAL'}</Text>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: 16}}>
          <SelectDropdown
            data={userRoles}
            // defaultValueByIndex={1}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setPlanType(selectedItem);
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              console.log('selectedItem---->', selectedItem, index);
              return (
                <View style={styles.dropdown3BtnChildStyleBg}>
                  <Text style={styles.dropdown3BtnTxt}>
                    {selectedItem ? selectedItem.title : 'Select Plan'}
                  </Text>
                  <Image
                    source={Constants.dropdownArrow}
                    style={styles.dropdown3BtnImage}
                  />
                </View>
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                  <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#F5F5F5',
            width: '100%',
            padding: 16,
            borderRadius: 8,
            marginTop: 32,
            alignItems: 'center',
          }}>
          <Text style={styles.planLbl}>{planType.title}</Text>
          <Text style={styles.planLbl1}>{planType.value}</Text>
          <Text style={styles.planLbl2}>{planType.terms}</Text>
          <View style={styles.divdr} />
          <View style={styles.plnDetailsCntr}>
            <View style={styles.plnDetailsIcnCntr}>
              <Image
                source={Constants.rightTick}
                style={styles.plnDetailsIcon}
              />
              <Text>Run Report</Text>
            </View>
            <Text style={styles.planDetailTxtStyl}>{planType.runReport}</Text>
          </View>
          <View style={styles.plnDetailsCntr}>
            <View style={styles.plnDetailsIcnCntr}>
              <Image
                source={Constants.rightTick}
                style={styles.plnDetailsIcon}
              />
              <Text>Business Transaction</Text>
            </View>
            <Text style={styles.planDetailTxtStyl}>{planType.bizTrnsc}</Text>
          </View>
          <View style={styles.plnDetailsCntr}>
            <View style={styles.plnDetailsIcnCntr}>
              <Image
                source={Constants.rightTick}
                style={styles.plnDetailsIcon}
              />
              <Text>Business Owner License</Text>
            </View>
            <Text style={styles.planDetailTxtStyl}>{planType.bizOwnrLsnc}</Text>
          </View>
          <View style={styles.plnDetailsCntr}>
            <View style={styles.plnDetailsIcnCntr}>
              <Image
                source={Constants.rightTick}
                style={styles.plnDetailsIcon}
              />
              <Text>Trial Period</Text>
            </View>
            <Text style={styles.planDetailTxtStyl}>{planType.trialPeriod}</Text>
          </View>
          <View style={styles.plnDetailsCntr}>
            <View style={styles.plnDetailsIcnCntr}>
              <Image
                source={Constants.rightTick}
                style={styles.plnDetailsIcon}
              />
              <Text>Technical Support</Text>
            </View>
            <Text style={styles.planDetailTxtStyl}>{planType.techSupport}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpgradeAccountBizForm');
            }}
            style={styles.plnSubmtBtnCntr}>
            <Text style={styles.plnTxtStyl}>Select Plan</Text>
            <Image
              source={Constants.rghtArrw}
              style={styles.plnDetailsRghtIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 36,
    backgroundColor: 'white',
  },
  settingLbl: {
    width: '80%',
    color: '#00B93F',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 24,
  },
  planLbl: {
    width: '80%',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 4,
    color: '#B0E152',
  },
  planLbl1: {
    marginTop: 4,
    width: '80%',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 4,
    color: '#00B93F',
  },
  planLbl2: {
    marginTop: 4,
    width: '80%',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
    color: '#00B93F',
  },
  divdr: {
    marginTop: 24,
    width: '85%',
    height: 1,
    backgroundColor: '#00B93F',
  },
  plnDetailsIcnCntr: {flexDirection: 'row', alignItems: 'center'},
  plnSubmtBtnCntr: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00B93F',
    paddingVertical: 4,
    paddingHorizontal: 32,
    marginTop: 24,
    borderRadius: 8,
    marginBottom: 32,
  },
  plnDetailsCntr: {
    marginTop: 16,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plnDetailsIcon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginRight: 8,
  },
  plnDetailsRghtIcon: {
    width: 20,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 12,
  },
  dataContainer: {
    width: '90%',
    marginTop: 54,
    alignItems: 'center',
  },
  busnssTypPnl: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00B93F',
    borderRadius: 8,
    borderWidth: 1,
  },
  radioOutr: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  radioInnr: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#00B93F',
  },
  dropdown3BtnStyle: {
    width: '60%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnChildStyleBg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    backgroundColor: '#00B93F',
    borderColor: '#00B93F',
  },
  dropdown3BtnImage: {width: 25, height: 25, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'white'},
  dropdown3RowStyle: {
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#00B93F',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 25, height: 25, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#B0E152',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 12,
  },
  plnTxtStyl: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  planDetailTxtStyl: {
    color: '#00B93F',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default UpgradeAccount;
