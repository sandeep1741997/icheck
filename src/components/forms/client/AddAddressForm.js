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
import SelectDropdown from 'react-native-select-dropdown';
import { Styles } from '../../../global';
import { UploadProof, SubmitButton, HeaderLogo } from '../../../views';

const AddAddressForm = props => {
  const submitForm = () => { };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{ width: '100%', marginTop: 26, alignItems: 'center' }}>
          <View style={{ width: '80%' }}>
            <HeaderLogo />
            <Text style={[styles.dropdown2BtnStyle, styles.title, styles.dropdown2BtnTxtStyle]}>
              {'Add Address'}
            </Text>
            {/* <SelectDropdown
              data={['Employment', 'Address']}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={"Add Address"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
            />*/}
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Landlord Name'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'Residence Status'}</Text>
            </View>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'From'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'To'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>
                {'Landlords Phone Number'}
              </Text>
              <TextInput
                // value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => { }}
                keyboardType="numeric"
              //keyboardType={this.props.keyboardType}
              //{...this.props.otherTextInputProps}
              />
            </View>

            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Country'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'State'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'City/Town'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'Postal Code'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'Address'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'Upload Address History Documents'}</Text>
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
    flex: 1,
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
  title: {
    marginTop: 5,
    fontSize: 20,
  },
});

export default AddAddressForm;
