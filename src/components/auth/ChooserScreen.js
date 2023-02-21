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
import HeaderLogo from '../../views/HeaderLogo';
import {Colors, Constants} from '../../global';

const ChooserScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <HeaderLogo />
      <Text style={styles.loginLbl}>Now you can bet on Integrity</Text>
      <Text style={styles.selOneLbl}>
        Your integrity score is the door to the market access you deserve
      </Text>

      <View style={{width: '80%', marginTop: 26}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={{
            height: 64,
            marginTop: 16,
            backgroundColor: '#B0E152',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            height: 64,
            marginTop: 16,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: Colors.lightGRay,
            borderWidth: 1,
            borderRadius: 4,
          }}>
          <Text
            style={{fontSize: 16, fontWeight: 'bold', color: Colors.lightGRay}}>
            Log in instead
          </Text>
        </TouchableOpacity>
        <View style={{width: '80%', marginTop: 32, flexDirection: 'row'}}>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              marginRight: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Constants.secCameraIcon}
              resizeMode="contain"
              style={{width: 75, height: 75}}
            />
          </View>
          <Text
            style={{
              color: Colors.darkGray,
              fontWeight: '600',
              padding: 4,
            }}>
            We take you security seriously we have 128 bit encryption to protect
            during transaction your data to our site.
          </Text>
        </View>
        <View style={{width: '80%', marginTop: 32, flexDirection: 'row'}}>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              marginRight: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Constants.chkGreenIcon}
              resizeMode="contain"
              style={{width: 75, height: 75}}
            />
          </View>
          <Text
            style={{
              color: Colors.darkGray,
              fontWeight: '600',
              padding: 4,
            }}>
            We take you security seriously we have 128 bit encryption to protect
            during transaction your data to our site.
          </Text>
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
  loginLbl: {
    marginTop: 36,
    width: '80%',
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selOneLbl: {
    width: '80%',
    textAlign: 'center',
    fontSize: 16,
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

export default ChooserScreen;
