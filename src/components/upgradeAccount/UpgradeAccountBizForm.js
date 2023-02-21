/* @flow weak */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import HeaderLogo from '../../views/HeaderLogo';
import { Colors, Styles } from '../../global';

const UpgradeAccountBizForm = ({ navigation }) => {
  const [nin, setNin] = useState('');
  const [password, setPassword] = useState('');

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Button onPress={() => {}} title="Update count" />,
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HeaderLogo />
        <View style={{ width: '100%', marginTop: 26, alignItems: 'center' }}>
          <Text style={styles.loginLbl}>Business SignUp</Text>
          <View style={{ width: '80%' }}>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Plan Name'}</Text>
                <TextInput
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    // setPassword(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Company Name'}</Text>
                <TextInput
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setPassword(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>
                  {'CAC Registration Number (Optional)'}
                </Text>
                <TextInput
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  secureTextEntry
                  onChangeText={value => {
                    setPassword(value);
                  }}
                //keyboardType={this.props.keyboardType}
                //{...this.props.otherTextInputProps}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Company Address'}</Text>
                <TextInput
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setPassword(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'First Name'}</Text>
                <TextInput
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setPassword(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Last Name'}</Text>
                <TextInput
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setPassword(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Job Title'}</Text>
                <TextInput
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setPassword(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
            <View style={Styles.customInpContainer}>
              <Text style={Styles.customTxtInpTtl}>{'Phone'}</Text>
              <TextInput
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={value => {
                  setPassword(value);
                }}
              />
            </View>
          </View>
          <View style={Styles.mgTop16}>
          <View style={Styles.customInpContainer}>
            <Text style={Styles.customTxtInpTtl}>{'Email'}</Text>
            <TextInput
              style={Styles.customTextInput}
              underlineColorAndroid="transparent"
              onChangeText={value => {
                setPassword(value);
              }}
            />
          </View>
        </View>
        <View style={Styles.mgTop16}>
        <View style={Styles.customInpContainer}>
          <Text style={Styles.customTxtInpTtl}>{'Password'}</Text>
          <TextInput
            style={Styles.customTextInput}
            underlineColorAndroid="transparent"
            onChangeText={value => {
              setPassword(value);
            }}
            keyboardType={'visible-password'}
          />
        </View>
      </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpgradeAccountPayment')}
              style={styles.sbmtBtn}>
              <Text style={styles.SbmtBtnTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 36,
    backgroundColor: 'white',
  },
  loginLbl: {
    marginTop: 72,
    width: '80%',
    color: '#000000',
    fontSize: 28,
    fontWeight: '500',
  },
  selOneLbl: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    marginTop: 24,
    marginBottom: 24,
  },
  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#B0E152',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 8,
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
  sbmtBtn: {
    height: 64,
    marginTop: 16,
    backgroundColor: '#B0E152',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  SbmtBtnTxt: { fontSize: 16, fontWeight: 'bold', color: 'white' },
});

export default UpgradeAccountBizForm;
