/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {Styles, Colors} from '../../../global';
import {UploadProof, SubmitButton, HeaderLogo} from '../../../views';

const CreateTransaction = props => {
  const submitForm = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        alwaysBounceHorizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{width: '100%', marginTop: 26, alignItems: 'center'}}>
          <View style={{width: '80%'}}>
            <HeaderLogo />
            <SelectDropdown
              data={['New', 'Existing']}
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
            />
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Client NIN'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => {}}
                //keyboardType={this.props.keyboardType}
                //{...this.props.otherTextInputProps}
              />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.genForm}>
              <Text style={styles.genFormTxt}>Generate Form</Text>
            </TouchableOpacity>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>
                {'First and Last Name'}
              </Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => {}}
                //keyboardType={this.props.keyboardType}
                //{...this.props.otherTextInputProps}
              />
            </View>
            <View
              style={[
                Styles.customInpContainer,
                Styles.mgTop16,
                {marginBottom: 8},
              ]}>
              <Text style={Styles.customTxtInpTtl}>{'Date'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => {}}
                //keyboardType={this.props.keyboardType}
                //{...this.props.otherTextInputProps}
              />
            </View>
            <SelectDropdown
              data={[
                'Loan',
                'Start Rent',
                'End Rent',
                'Hire Purchase',
                'Lease',
              ]}
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
            />
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Transaction Id'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => {}}
                //keyboardType={this.props.keyboardType}
                //{...this.props.otherTextInputProps}
              />
            </View>
            <View style={[Styles.customInpContainer, Styles.mgTop16]}>
              <Text style={Styles.customTxtInpTtl}>{'Agent Name'}</Text>
              <TextInput
                value={''}
                style={Styles.customTextInput}
                underlineColorAndroid="transparent"
                onChangeText={() => {}}
                //keyboardType={this.props.keyboardType}
                //{...this.props.otherTextInputProps}
              />
            </View>
            {/* <UploadProof /> */}
            <View style={{marginBottom: 64}}>
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
  genForm: {
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  genFormTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkGray,
  },
});

export default CreateTransaction;
