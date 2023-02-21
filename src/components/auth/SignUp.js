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
} from 'react-native';
import HeaderLogo from '../../views/HeaderLogo';
import { Colors, Styles } from '../../global';

const SignUp = ({ navigation }) => {
  const [nin, setNin] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, seFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [nationality, setNationality] = useState('');
  const [photo, setPhoto] = useState('');
  const [gender, setGender] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');



  function client_signup() {
    setNin('11111111111');
    setPassword('123456');
    setLastname("Ajay@123")
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    };

    fetch(`https://wewatchnetwork.in/icheck/api/client-chk-api?nin=${nin}&lastname=${lastname}`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.code == 202) {
          // console.log(json.result.data.nin+"");
          // console.log(json.result.data.firstname+"");
          // console.log(json.result.data.lastname+"");
          // console.log(json.result.data.birthdate+"");
          // console.log(json.result.data.phone+"");
          // console.log(json.result.data.middlename+"");
          // console.log(json.result.data.nationality+"");
          // console.log(json.result.data.photo+"");
          // console.log(json.result.data.gender+"");
          // console.log(address+"");
          // console.log(password+"");
          // console.log(email+"");

          let inputProps = {
            result: json.result
            // data:json.data,
            // msg:json.msg,
            // nin:json.client_id
          };
          console.log(inputProps.result.data.birthdate)
          //  showAlert1(inputProps);
        }
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      });
  };


  return (
    <SafeAreaView style={styles.root}>
      <HeaderLogo />
      <Text style={styles.loginLbl}>Sign Up</Text>
      <View style={styles.lgnPanel}>

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
            <Text style={Styles.customTxtInpTtl}>{'Last Name'}</Text>
            <TextInput
              value={lastname}
              style={Styles.customTextInput}
              underlineColorAndroid="transparent"
              onChangeText={value => {
                setLastname(value);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={client_signup}
          style={{
            height: 64,
            marginTop: 16,
            backgroundColor: '#B0E152',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
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
            style={{ fontSize: 16, fontWeight: '500', color: Colors.darkGray }}>
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
    backgroundColor: 'white',
  },
  loginLbl: {
    marginTop: 36,
    width: '80%',
    color: '#000000',
    fontSize: 28,
    fontWeight: '400',
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
  forgotPswrdBtn: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  forgotPswrdTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkGray,
  },
  crtusrBtn: {
    height: 64,
    marginTop: 16,
    backgroundColor: '#B0E152',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  crtusrTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  lgnPanel: { width: '80%', marginTop: 26 },
  busnssTypPnl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOutr: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInnr: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#B0E152',
  },
  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
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
    backgroundColor: '#B0E152',
  },
  dropdown3BtnImage: { width: 25, height: 25, resizeMode: 'cover' },
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: 'white', borderRadius: 8 },
  dropdown3RowStyle: {
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 25, height: 25, resizeMode: 'cover' },
  dropdown3RowTxt: {
    color: Colors.darkGray,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 12,
  },
});

export default SignUp;
