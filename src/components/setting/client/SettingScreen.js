/* @flow weak */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Switch
} from 'react-native';
import HeaderLogo from '../../../views/HeaderLogo';
import { Colors, Styles } from '../../../global';

const SettingScreen = ({ navigation }) => {
  const [nin, setNin] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const getData = () => {
    let data = {
      nin: '17448863009',
      user_type: 'client'
    };

    console.warn("Start")
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET',
      // mode: 'cors',
      // cache: 'no-cache',
      // credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      // redirect: 'follow',
      // referrerPolicy: 'no-referrer',
      // body: JSON.stringify(data)
    })
      .then((response) => { console.warn("hhhh", response.json()); return response.json() })
      .then((data) => {
        console.warn('Success:', data);
      })
      .catch((error) => {
        console.warn('Error:', error);
      });

    console.warn("End")
  }

  useEffect(() => {
    getData();
  }, [])

  const RowItem = ({ frstItem, scndItem }) => {
    return (
      <View style={[Styles.flxDir, Styles.mgTop8, Styles.pdngHrz8]}>
        <View style={[Styles.flxDir]}>
          <Text style={styles.sttngFnt}>{frstItem}</Text>
        </View>
        <View style={Styles.algnRght}>
          <Text style={styles.sttngTxt}>{scndItem}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <HeaderLogo />
      <Text style={styles.loginLbl}>User Setting</Text>
      <View style={styles.dataContainer}>
        <View>
          <View style={styles.infoHeader}>
            <Text style={styles.headng}>{'Account'}</Text>
          </View>
          <RowItem frstItem={'Name'} scndItem={'Rishabh Jain'} />
          <RowItem frstItem={'Email'} scndItem={'Rishabh@verifyme.com'} />
          <RowItem frstItem={'Phone'} scndItem={'123456789'} />
          <RowItem frstItem={'Address'} scndItem={'ABc Fort Nigeria - 1100'} />
        </View>
        <View style={Styles.mgTop32}>
          <View style={styles.infoHeader}>
            <Text style={styles.headng}>{'Security'}</Text>
          </View>
          <RowItem frstItem={'Username'} scndItem={'Rishabh Jain'} />
          <RowItem frstItem={'Update Password'} scndItem={'********'} />
          <RowItem
            frstItem={'Two-Factor Authentication'}
            scndItem={'Enabled'}
          />
          <RowItem frstItem={'Devices'} scndItem={''} />
          <RowItem frstItem={'Security Questions'} scndItem={''} />
        </View>
      </View>

      <TouchableOpacity
        onPress={getData}
        style={styles.logoutBtn}>
        {/*<Text style={styles.logoutBtnTxt}>Logout User</Text>*/}
      </TouchableOpacity>
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
  infoHeader: {
    backgroundColor: '#B0E152',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
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
  dataContainer: { width: '80%', marginTop: 16 },
  headng: {
    color: Colors.darkGray,
    fontSize: 16,
    fontWeight: '500',
  },
  sttngFnt: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
  sttngTxt: {
    color: Colors.darkGray,
    fontSize: 14,
    fontWeight: '500',
  },
  logoutBtn: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  logoutBtnTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkGray,
  },
});

export default SettingScreen;
