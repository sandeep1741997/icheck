/* @flow weak */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from 'react-native';
import HeaderLogo from '../../views/HeaderLogo';
import SelectDropdown from 'react-native-select-dropdown';
import { Styles, Colors, Constants } from '../../global';
import axios from 'axios';

const SignIn = ({ navigation }) => {
  const [nin, setNin] = useState('');
  const [password, setPassword] = useState('');
  const [businessType, setBusinessType] = useState(1);
  const [loginType, setLoginType] = useState(3);


  const userRoles = [
    { title: 'Individual', image: Constants.individualIcon },
    { title: 'Business', image: Constants.businessIcon },
  ];

  const moveToNewScreen = () => {
    if (loginType === 1) {
      Alert.alert(
        "Sorry for inconvenience",
        "Sorry business login is currently not working",
        [
          {
            text: 'OK', onPress: () => {
              console.log('OK Pressed')

            }
          },
        ]
      );
      // navigation.navigate('BusinessOwnerAppStack');
    } else {
      client_login();
      // navigation.navigate('CreateUserProfile');
    }
  };

  showAlert1 = (props) => {
    let title = ""
    let msg = ""
    if (props.data == "Welcome") {
      title = "Login Success"
      msg = "You have success fully logged in"
    }
    else {
      title = "Login failed"
      msg = props.msg
    }
    Alert.alert(
      title,
      msg,
      [
        {
          text: 'OK', onPress: () => {
            if (props.data == "Welcome") {
              if (loginType === 1) {
                navigation.navigate('BusinessOwnerAppStack');
              } else {
                navigation.navigate('dashboard', {
                  client_id: props.client_id,
                });
              }
            }
          }
        },
      ]
    );
  }

  client_login =  () => {
    setLoginType(0);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nin: "17448863009",
        password: "Ajay@123",
        user_type:"Client"
      })
    };

    console.warn("Start");
    fetch(`https://icheck.ng/project/api/dispute-list-api`, requestOptions).
      then(res => res.json()).
      then(data => {
        console.warn("da123", data)
      })
      .catch(err => {
        console.warn("result", err);
      })

    console.warn("End");
  };


  return (
    <SafeAreaView style={styles.root}>
      <HeaderLogo />
      <Text style={styles.loginLbl}>Login</Text>
      <Text style={styles.selOneLbl}>Please select one</Text>
      <SelectDropdown
        data={userRoles}
        // defaultValueByIndex={1}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setLoginType(index);
        }}
        buttonStyle={styles.dropdown3BtnStyle}
        renderCustomizedButtonChild={(selectedItem, index) => {
          console.log('selectedItem---->', selectedItem, index);
          return (
            <View
              style={
                selectedItem
                  ? styles.dropdown3BtnChildStyleBg
                  : styles.dropdown3BtnChildStyle
              }>
              {selectedItem && (
                <Image
                  source={selectedItem.image}
                  style={styles.dropdown3BtnImage}
                />
              )}
              <Text style={styles.dropdown3BtnTxt}>
                {selectedItem ? selectedItem.title : 'Select One'}
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
              <Image source={item.image} style={styles.dropdownRowImage} />
              <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
            </View>
          );
        }}
      />
      <View style={styles.lgnPanel}>
        {loginType === 1 && (
          <View style={styles.busnssTypPnl}>
            <TouchableOpacity
              onPress={() => {
                setBusinessType(1);
              }}
              style={styles.radioOutr}>
              {businessType === 1 ? <View style={styles.radioInnr} /> : null}
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>{'Agent'}</Text>

            <TouchableOpacity
              onPress={() => {
                setBusinessType(2);
              }}
              style={[styles.radioOutr, { marginLeft: 32 }]}>
              {businessType === 2 ? <View style={styles.radioInnr} /> : null}
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>{'Owner'}</Text>
          </View>
        )}
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
            //keyboardType={this.props.keyboardType}
            //{...this.props.otherTextInputProps}
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
        <TouchableOpacity onPress={client_login} style={styles.crtusrBtn}>
          <Text style={styles.crtusrTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPswrdBtn}>
          <Text style={styles.forgotPswrdTxt}>Forgot Password ?</Text>
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

export default SignIn;
