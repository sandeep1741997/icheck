/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Styles } from '../../../global';
import { UploadProof, SubmitButton, HeaderLogo } from '../../../views';

const SubmitDisputeForm = props => {
  const submitForm = () => { };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{ width: '100%', marginTop: 26, alignItems: 'center' }}>
          <View style={{ width: '80%' }}>
            <HeaderLogo />
            <Text style={[Styles.customTxtInpTtl, Styles.mgTop16]}>
              {'Dispute Form'}
            </Text>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Case ID'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => { }}
              //keyboardType={this.props.keyboardType}
              //{...this.props.otherTextInputProps}
              />
            </View>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Business Name'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => { }}
              //keyboardType={this.props.keyboardType}
              //{...this.props.otherTextInputProps}
              />
            </View>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Dispute Reason'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => { }}
              //keyboardType={this.props.keyboardType}
              //{...this.props.otherTextInputProps}
              />
            </View>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Upload Evidence'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => { }}
              //keyboardType={this.props.keyboardType}
              //{...this.props.otherTextInputProps}
              />
            </View>

            {/* <UploadProof />*/}
            <View style={{ marginBottom: 64 }}>
              <SubmitButton submitAction={submitForm} />
            </View>
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
  dropdown2BtnStyle: {
    width: '100%',
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
});

export default SubmitDisputeForm;
