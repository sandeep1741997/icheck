/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
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
} from 'react-native';
import HeaderLogo from '../../../views/HeaderLogo';
import { Colors, Constants, Styles } from '../../../global';
import { Table, Row, Rows } from 'react-native-table-component'
import CustomModal from '../../../views/Modal';
import { DataTable } from 'react-native-paper';

const DisputeSupport = ({ navigation }) => {
  const [nin, setNin] = useState('');
  tableHead = ['Cases ID', 'Date', 'Reson', 'Status'],
    tableTitle = ['Title', 'Title2', 'Title3', 'Title4'],
    tableData = [
      ['5fdedb7c25', '2020-12-2', 'Employment', 'Pending'],
      ['7fdedb7c2', '2020-12-22', 'Adress', 'Verified'],
      ['5fdedb7c3', '2020-12-24', 'abcds', 'Cancel'],
      ['5fdedb73w', '2020-12-27', 'pakjsl', 'Pending']
    ]

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
      <View style={styles.dataContainer}>

        <View style={[Styles.mgTop16]}>
          <View style={[Styles.customInpContainer, styles.search]}>
            <Text style={Styles.customTxtInpTtl}>{'Search with keyword(s)'}</Text>
            <TextInput
              style={Styles.customTextInput}
              placeholder={'Enter the keyboard'}
              underlineColorAndroid="transparent"
              onChangeText={value => {
                setPassword(value);
              }}
            />
            <View>
              <Image
                source={Constants.iconSearch}
                resizeMode="contain"
                style={[Styles.tabIconSize, { tintColor: 'gray' }, styles.searchIcon]}
              />
            </View>
          </View>
        </View>

        <Text style={styles.lstHeader}>Open Cases</Text>
        <View
          style={{
            width: '100%',
            borderRadius: 8,
            // borderWidth: 2,
            borderBottomColor: 'gray',
            marginTop: 8,
          }}>
          {/* <View
            style={{
              backgroundColor: '#B0E152',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: 8,
              paddingVertical: 8,
              paddingHorizontal: 8,
            }}>

            <Text style={styles.listTitles}>Cases ID</Text>
            <Text style={styles.listTitles}>Date </Text>
            <Text style={styles.listTitles}>Reson </Text>
            <Text style={styles.listTitles}>Documents </Text>
            <Text style={styles.listTitles}>Status </Text>
          </View>
          */}
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={tableHead} style={[styles.head]} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </View>
        <Text style={styles.lstHeader}>Closed Cases</Text>
        <View>
          <DataTable style={styles.container}>
            <DataTable.Header style={[styles.head]}>
              <DataTable.Title>Cases ID</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
              <DataTable.Title>Action</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>5fdedb7c25</DataTable.Cell>
              <DataTable.Cell>Pending</DataTable.Cell>
              <DataTable.Cell><CustomModal /></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>5fdedb7c25</DataTable.Cell>
              <DataTable.Cell>In-Review</DataTable.Cell>
              <DataTable.Cell><CustomModal /></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>5fdedb7c25</DataTable.Cell>
              <DataTable.Cell>Resolved</DataTable.Cell>
              <DataTable.Cell><CustomModal /></DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <View
            style={{
              // backgroundColor: '#B0E152',
              // justifyContent: 'space-between',
              // flexDirection: 'row',
              // borderRadius: 8,
              // paddingVertical: 8,
              // paddingHorizontal: 8,
            }}>
            {/*<Text style={styles.listTitles}>Cases ID</Text>
            <Text style={styles.listTitles}>Status </Text>
          <Text style={styles.listTitles}>Action</Text>*/}
           {/* <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
              <Row data={tableHead} style={[styles.head]} textStyle={styles.text} />
              <Rows data={tableData} textStyle={styles.text} />
        </Table>*/}
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
  dataContainer: { width: '80%', marginTop: 54 },
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
  search: {
    borderRadius: 25,
    padding: 10
  },
  head: {
    height: 40,
    backgroundColor: '#B0E152',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderRadius: 8,
    // paddingVertical: 8,
    // paddingHorizontal: 8,
  },
  searchIcon: {
    bottom: 25,
    left: 280
  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#B0E152' },
  row: { height: 38 },
  text: { textAlign: 'center' },
  container: {
    padding: 5,
    border:'2px solid black'
  },
  tableHeader: {
    // backgroundColor: '#DCDCDC',
  },
});

export default DisputeSupport;
