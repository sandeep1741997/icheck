/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* @flow weak */
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import HeaderLogo from '../../../views/HeaderLogo';
import {Colors, Styles} from '../../../global';

const BizSupport = ({navigation}) => {
  const [nin, setNin] = useState('');

  const RowItem = ({frstItem, scndItem}) => {
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
      <View style={styles.dataContainer}>
        <Text style={styles.lstHeader}>New Cases</Text>
        <View
          style={{
            width: '100%',
            borderRadius: 8,
            borderWidth: 2,
            borderBottomColor: 'gray',
            marginTop: 8,
          }}>
          <View
            style={{
              backgroundColor: '#B0E152',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: 8,
              paddingVertical: 8,
              paddingHorizontal: 8,
            }}>
            <Text style={styles.listTitles}>Cases Id</Text>
            <Text style={styles.listTitles}>Status </Text>
            <Text style={styles.listTitles}>Action</Text>
          </View>
        </View>
        <Text style={styles.lstHeader}>Closed Cases</Text>
        <View
          style={{
            width: '100%',
            borderRadius: 8,
            borderWidth: 2,
            borderBottomColor: 'gray',
            marginTop: 8,
          }}>
          <View
            style={{
              backgroundColor: '#B0E152',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: 8,
              paddingVertical: 8,
              paddingHorizontal: 8,
            }}>
            <Text style={styles.listTitles}>Cases Id</Text>
            <Text style={styles.listTitles}>Status </Text>
            <Text style={styles.listTitles}>Action</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    paddingTop: 36,
    backgroundColor: 'white',
  },
  dataContainer: {width: '80%', marginTop: 54},
  lstHeader: {
    marginTop: 36,
    width: '100%',
    color: '#000000',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'left',
  },
  listTitles: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default BizSupport;
