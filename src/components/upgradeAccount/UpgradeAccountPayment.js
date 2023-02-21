/* @flow weak */
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import HeaderLogo from '../../views/HeaderLogo';
import {Colors, Styles} from '../../global';

const UpgradeAccountPayment = ({navigation}) => {
  const [nin, setNin] = useState('');

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Button onPress={() => {}} title="Update count" />,
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.paymntProcess}>
        We are Processing Payment for this Transaction
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymntProcess: {fontSize: 16, fontWeight: 'bold', color: '#00B93F'},
});

export default UpgradeAccountPayment;
