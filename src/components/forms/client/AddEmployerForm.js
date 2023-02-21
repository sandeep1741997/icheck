/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Styles } from '../../../global';
import { UploadProof, SubmitButton, HeaderLogo } from '../../../views';

const AddEmployerForm = props => {
  const submitForm = () => { };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{ width: '100%', marginTop: 26, alignItems: 'center' }}>
          <View style={{ width: '80%' }}>
            <HeaderLogo />
            { /*<SelectDropdown
              data={['Employment', 'Address']}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              // defaultButtonText={"Select country"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
            />*/}
            <Text style={[Styles.dropdown2BtnStyle, Styles.dropdown2BtnTxtStyle]}>
              {'Add Employer'}
            </Text>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Employer Name'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'Employment Status'}</Text>
            </View>

            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Start Date'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'End Date'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'HR Email'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'Phone'}</Text>
              <TextInput
                value={''}
                textContentType={"number"}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => { }}
              //keyboardType={this.props.keyboardType}
              //{...this.props.otherTextInputProps}
              />
            </View>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Employer Address'}</Text>
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
              <Text style={Styles.customTxtInpTtl}>{'Upload Documents'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => { }}
              //keyboardType={this.props.keyboardType}
              //{...this.props.otherTextInputProps}
              />
            </View>
            {/*<UploadProof />*/}
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

export default AddEmployerForm;
