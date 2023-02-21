/* @flow weak */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import HeaderLogo from '../../../views/HeaderLogo';
import {Colors, Styles} from '../../../global';
import { useRoute } from '@react-navigation/native';

const CreateUserProfile = ({navigation}) => {
  const route = useRoute();
  const [nin, setnin] = useState('route.params.result.data.nin'+"");
  const [f_name, setF_name] = useState('route.params.result.data.firstname'+"");
  const [m_name, setM_name] = useState('route.params.result.data.lastname'+"");
  const [l_name, setL_name] = useState('route.params.result.data.birthdate'+"");
  const [mob, setMob] = useState('route.params.result.data.phone'+"");
  const [birthdate, setBirthdate] = useState('route.params.result.data.middlename')+"";
  const [nationality, setNationality] = useState('route.params.result.data.nationality'+"");
  const [photo, setPhoto] = useState('route.params.result.data.photo'+"");
  const [gender, setgender] = useState('route.params.result.data.gender'+"");

  const [email, setEmail] = useState('route.params.email'+"");
  const [address, setAddress] = useState('route.params.address'+"");
  const [password, setPassword] = useState('route.params.password'+"");

  // const [security_question, setSecurity_question] = useState('');
  // const [answer, setAnswer] = useState('');
  // const [client_id, setClient] = useState(route.params.client_id);

  // console.log(client_id);
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Button onPress={() => {}} title="Update count" />,
  //   });
  // }, [navigation]);

  submit_profile = () => {
        const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      body: JSON.stringify({
        fname: f_name,
        lname: m_name+l_name,
        contact: mob,
        address: address,
        question: security_question,
        answer: answer
      })
    };

    fetch ('https://wewatchnetwork.in/icheck/api/client-profileupdate-api',requestOptions)
    .then((response)=>response.json())
    .then((json) => {
      console.log(json)      
    })
    .catch((error) =>{
      console.log(error)
    });

  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HeaderLogo />
        <View style={{width: '100%', marginTop: 26, alignItems: 'center'}}>
          <Text style={styles.loginLbl}>Set Up Profile</Text>
          <View style={{width: '80%'}}>

            {/* <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'NIN'}</Text>
                <TextInput
                  value={clientID}
                  maxLength={11}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setClientID(value.replace(/[^0-9a-zA-Z]+/gi, ''));
                  }}
                />
              </View>
            </View> */}

            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'First Name'}</Text>
                <TextInput
                  value={f_name}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setF_name(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Middle Name'}</Text>
                <TextInput
                  value={m_name}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setM_name(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Last Name'}</Text>
                <TextInput
                  value={l_name}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setL_name(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Email'}</Text>
                <TextInput
                  value={email}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setEmail(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Phone Number'}</Text>
                <TextInput
                  value={mob}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setMob(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Address'}</Text>
                <TextInput
                  value={address}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setAddress(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>
                  {'Security Question'}
                </Text>
                <TextInput
                  value={security_question}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  onChangeText={value => {
                    setSecurity_question(value);
                  }}
                />
              </View>
            </View>
            <View style={Styles.mgTop16}>
              <View style={Styles.customInpContainer}>
                <Text style={Styles.customTxtInpTtl}>{'Answer'}</Text>
                <TextInput
                  value={answer}
                  style={Styles.customTextInput}
                  underlineColorAndroid="transparent"
                  secureTextEntry
                  onChangeText={value => {
                    setAnswer(value);
                  }}
                  //keyboardType={this.props.keyboardType}
                  //{...this.props.otherTextInputProps}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => 
                submit_profile()
                // navigation.navigate('ClientAppStack')
            }
              style={{
                height: 64,
                marginTop: 16,
                backgroundColor: '#B0E152',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ClientAppStack')}
              style={styles.skipBtn}>
              <Text style={styles.skipBtnTxt}>Skip for next time</Text>
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
    marginTop: 36,
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
  skipBtn: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  skipBtnTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkGray,
  },
});

export default CreateUserProfile;
