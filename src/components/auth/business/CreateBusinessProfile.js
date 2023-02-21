/* @flow weak */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import HeaderLogo from '../../../views/HeaderLogo';
import {Colors, Styles} from '../../../global';

const CreateBusinessProfile = ({navigation}) => {
  const [nin, setNin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.root}>
      <HeaderLogo />
      <Text style={styles.loginLbl}>Sign Up</Text>
      <View style={{width: '80%', marginTop: 54}}>
        <View style={Styles.mgTop16}>
          <View style={Styles.customInpContainer}>
            <Text style={Styles.customTxtInpTtl}>{'NIN'}</Text>
            <TextInput
              value={nin}
              maxLength={11}
              style={Styles.customTextInput}
              underlineColorAndroid="transparent"
              onChangeText={value => {
                setNin(value.replace(/[^0-9a-zA-Z]+/gi, ''));
              }}
            />
          </View>
        </View>
        <View style={Styles.mgTop16}>
          <View style={Styles.customInpContainer}>
            <Text style={Styles.customTxtInpTtl}>{'Email'}</Text>
            <TextInput
              value={password}
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
              value={password}
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
        <TouchableOpacity
          onPress={() => navigation.navigate('ClientAppStack')}
          style={{
            height: 64,
            marginTop: 16,
            backgroundColor: '#B0E152',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}>
          <Text
            style={{fontSize: 16, fontWeight: '500', color: Colors.darkGray}}>
            Login instead ?
          </Text>
        </TouchableOpacity>
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
  loginLbl: {
    marginTop: 72,
    width: '80%',
    color: '#000000',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'left',
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
});

export default CreateBusinessProfile;
